// ============================================================
// PROGRESS TRACKING — Persistent via localStorage + backend sync
// ============================================================

const TrackProgress = {
  STORAGE_KEY: 'cod_progress',
  state: null,

  init() {
    this.state = this.load();
    this.recordVisit();
    this.updateSidebarProgress();
  },

  load() {
    try {
      var saved = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
      if (saved && saved.completedLessons) return saved;
    } catch (e) {}
    return {
      completedLessons: [],
      lessonTimes: {},
      moduleCompleted: [],
      startedAt: new Date().toISOString(),
      lastVisit: null,
      visitDays: [],
      totalSeconds: 0,
    };
  },

  save() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
  },

  recordVisit() {
    var today = new Date().toISOString().split('T')[0];
    this.state.lastVisit = today;
    if (!this.state.visitDays) this.state.visitDays = [];
    if (this.state.visitDays[this.state.visitDays.length - 1] !== today) {
      this.state.visitDays.push(today);
    }
    this.save();
  },

  // Called when a lesson is navigated to
  trackLessonView(moduleId, lessonId) {
    if (!this.state.lessonTimes) this.state.lessonTimes = {};
    this.state.lessonTimes[lessonId] = this.state.lessonTimes[lessonId] || 0;
    this._currentLesson = lessonId;
    this._currentModule = moduleId;
    this._viewStart = Date.now();
    this.save();
  },

  // Called when leaving a lesson (navigating away)
  stopTracking() {
    if (this._viewStart && this._currentLesson) {
      var seconds = Math.floor((Date.now() - this._viewStart) / 1000);
      if (seconds > 0 && seconds < 7200) { // cap at 2h per session
        if (!this.state.lessonTimes) this.state.lessonTimes = {};
        this.state.lessonTimes[this._currentLesson] = (this.state.lessonTimes[this._currentLesson] || 0) + seconds;
        this.state.totalSeconds = (this.state.totalSeconds || 0) + seconds;
      }
      this._viewStart = null;
      this.save();
    }
  },

  markComplete(lessonId) {
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }
    // Check if module is complete
    this.checkModuleCompletion(lessonId);
    this.updateSidebarProgress();
    this.save();
    this.syncToBackend(lessonId);
  },

  isCompleted(lessonId) {
    return this.state.completedLessons.includes(lessonId);
  },

  checkModuleCompletion(lessonId) {
    if (typeof COURSE_DATA === 'undefined') return;
    var modId = parseInt(lessonId.split('.')[0]);
    var mod = COURSE_DATA.modules.find(function(m) { return m.id === modId; });
    if (!mod || !mod.lessons || !mod.lessons.length) return;
    var allDone = mod.lessons.every(function(l) {
      return this.state.completedLessons.includes(l.id);
    }.bind(this));
    if (allDone && !this.state.moduleCompleted.includes(modId)) {
      this.state.moduleCompleted.push(modId);
    }
  },

  // Get streak (consecutive days)
  getStreak() {
    if (!this.state.visitDays || !this.state.visitDays.length) return 0;
    var days = this.state.visitDays.slice().sort();
    var streak = 1;
    var today = new Date().toISOString().split('T')[0];
    var lastDay = days[days.length - 1];
    // If last visit was not today or yesterday, streak is 0
    var diffMs = new Date(today) - new Date(lastDay);
    var diffDays = diffMs / (1000 * 60 * 60 * 24);
    if (diffDays > 1) return 0;
    for (var i = days.length - 1; i > 0; i--) {
      var curr = new Date(days[i]);
      var prev = new Date(days[i - 1]);
      var gap = (curr - prev) / (1000 * 60 * 60 * 24);
      if (gap === 1) streak++;
      else break;
    }
    return streak;
  },

  // Get stats for dashboard
  getStats() {
    var totalLessons = 0;
    if (typeof COURSE_DATA !== 'undefined') {
      COURSE_DATA.modules.forEach(function(m) {
        if (m.lessons) totalLessons += m.lessons.length;
      });
    }
    var completed = this.state.completedLessons.length;
    var totalMinutes = Math.floor((this.state.totalSeconds || 0) / 60);
    return {
      lessonsCompleted: completed,
      totalLessons: totalLessons || 100,
      modulesFinished: (this.state.moduleCompleted || []).length,
      totalModules: 12,
      totalMinutes: totalMinutes,
      streak: this.getStreak(),
      percentage: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0,
    };
  },

  // Get per-module progress
  getModuleProgress() {
    if (typeof COURSE_DATA === 'undefined') return [];
    var self = this;
    return COURSE_DATA.modules.map(function(mod) {
      var total = mod.lessons ? mod.lessons.length : 0;
      var done = 0;
      if (mod.lessons) {
        mod.lessons.forEach(function(l) {
          if (self.state.completedLessons.includes(l.id)) done++;
        });
      }
      return {
        id: mod.id,
        title: mod.title,
        total: total,
        completed: done,
        percentage: total > 0 ? Math.round((done / total) * 100) : 0,
      };
    });
  },

  // Get recent lessons
  getRecentLessons() {
    var recent = this.state.completedLessons.slice(-5).reverse();
    if (typeof COURSE_DATA === 'undefined') return [];
    var result = [];
    recent.forEach(function(lid) {
      var parts = lid.split('.');
      var modId = parseInt(parts[0]);
      var mod = COURSE_DATA.modules.find(function(m) { return m.id === modId; });
      if (mod && mod.lessons) {
        var lesson = mod.lessons.find(function(l) { return l.id === lid; });
        if (lesson) {
          result.push({ id: lid, title: lesson.title, module: mod.title, moduleId: modId });
        }
      }
    });
    return result;
  },

  syncToBackend(lessonId) {
    var token = localStorage.getItem('cod_token');
    if (!token) return;
    var parts = lessonId.split('.');
    var moduleId = parseInt(parts[0]);
    fetch(window.location.origin + '/api/progress/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ lesson_id: lessonId, module_id: moduleId, status: 'completed' }),
    }).catch(function() {});
  },

  updateChecklist() {
    const checks = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const total = checks.length;
    let checked = 0;
    checks.forEach(c => { if (c.checked) checked++; });

    const fill = document.getElementById('checklistProgress');
    const text = document.getElementById('checklistText');
    if (fill) fill.style.width = `${(checked / total) * 100}%`;
    if (text) text.textContent = `${checked} / ${total}`;

    if (fill) {
      if (checked === total) fill.style.background = '#00ff6a';
      else if (checked > total * 0.5) fill.style.background = '#4a9eff';
      else fill.style.background = 'var(--green, var(--accent))';
    }

    // If all checked, mark lesson complete
    if (checked === total && total > 0 && Navigation && Navigation.currentLesson) {
      this.markComplete(Navigation.currentLesson.id);
    }
  },

  updateSidebarProgress() {
    if (!this.state.completedLessons.length) return;
    this.state.completedLessons.forEach(function(lid) {
      var el = document.querySelector('.sidebar-lesson[data-lesson="' + lid + '"]');
      if (el && !el.querySelector('.check-done')) {
        var check = document.createElement('span');
        check.className = 'check-done';
        check.textContent = '✓';
        check.style.cssText = 'color:#00e85e;font-size:12px;font-weight:700;margin-left:auto;flex-shrink:0;';
        el.appendChild(check);
      }
    });
  }
};
