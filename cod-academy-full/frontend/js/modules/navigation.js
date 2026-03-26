// ============================================================
// NAVIGATION — Sidebar, routing, module/lesson switching
// ============================================================

const Navigation = {
  currentModule: null,
  currentLesson: null,

  init() {
    this.renderSidebar();
    this.bindEvents();
    // Load Module 1, Lesson 1 by default
    this.navigateTo(1, "1.1");
  },

  renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    const html = COURSE_DATA.modules.map(mod => {
      const hasLessons = mod.lessons && mod.lessons.length > 0;
      const lessons = hasLessons ? mod.lessons.map(l => `
        <a class="sidebar-lesson" data-module="${mod.id}" data-lesson="${l.id}" href="#${l.id}">
          <span class="lesson-id">${l.id}</span>
          <span class="lesson-title">${l.title}</span>
        </a>
      `).join('') : '<div class="sidebar-coming-soon">În curând...</div>';

      return `
        <div class="sidebar-module" data-module="${mod.id}">
          <div class="sidebar-module-header" onclick="Navigation.toggleModule(${mod.id})" style="--mod-color: ${mod.color}">
            <span class="mod-icon">${mod.icon}</span>
            <span class="mod-number">M${mod.id}</span>
            <span class="mod-title">${mod.title}</span>
            <span class="mod-chevron">›</span>
          </div>
          <div class="sidebar-lessons" id="modLessons-${mod.id}">
            ${lessons}
          </div>
        </div>
      `;
    }).join('');
    nav.innerHTML = html;
  },

  toggleModule(modId) {
    const el = document.getElementById(`modLessons-${modId}`);
    const header = el.previousElementSibling;
    // Toggle doar acest modul — celelalte raman cum sunt
    el.classList.toggle('open');
    header.classList.toggle('active');
  },

  navigateTo(moduleId, lessonId) {
    const mod = COURSE_DATA.modules.find(m => m.id === moduleId);
    if (!mod) return;

    // Stop tracking previous lesson time
    TrackProgress.stopTracking();

    this.currentModule = mod;

    // Update active states
    document.querySelectorAll('.sidebar-lesson').forEach(l => l.classList.remove('active'));
    const activeLesson = document.querySelector(`.sidebar-lesson[data-lesson="${lessonId}"]`);
    if (activeLesson) activeLesson.classList.add('active');

    // Ensure the target module is open in sidebar (don't close others)
    const targetLessons = document.getElementById(`modLessons-${moduleId}`);
    const targetHeader = targetLessons?.previousElementSibling;
    if (targetLessons && !targetLessons.classList.contains('open')) {
      targetLessons.classList.add('open');
      targetHeader?.classList.add('active');
    }

    if (mod.lessons && mod.lessons.length > 0) {
      const lesson = mod.lessons.find(l => l.id === lessonId) || mod.lessons[0];
      this.currentLesson = lesson;
      LessonRenderer.render(mod, lesson);
      // Track lesson view time
      TrackProgress.trackLessonView(moduleId, lessonId);
    } else {
      LessonRenderer.renderComingSoon(mod);
    }

    // Mobile: close sidebar
    document.getElementById('sidebar').classList.remove('mobile-open');
    
    // Scroll to top
    document.getElementById('mainContent').scrollTo(0, 0);
  },

  nextLesson() {
    if (!this.currentModule || !this.currentLesson) return;
    const lessons = this.currentModule.lessons;
    const idx = lessons.findIndex(l => l.id === this.currentLesson.id);
    if (idx < lessons.length - 1) {
      this.navigateTo(this.currentModule.id, lessons[idx + 1].id);
    } else {
      // Next module
      const nextMod = COURSE_DATA.modules.find(m => m.id === this.currentModule.id + 1);
      if (nextMod && nextMod.lessons.length > 0) {
        this.navigateTo(nextMod.id, nextMod.lessons[0].id);
      }
    }
  },

  prevLesson() {
    if (!this.currentModule || !this.currentLesson) return;
    const lessons = this.currentModule.lessons;
    const idx = lessons.findIndex(l => l.id === this.currentLesson.id);
    if (idx > 0) {
      this.navigateTo(this.currentModule.id, lessons[idx - 1].id);
    }
  },

  bindEvents() {
    document.addEventListener('click', (e) => {
      const lessonLink = e.target.closest('.sidebar-lesson');
      if (lessonLink) {
        e.preventDefault();
        const modId = parseInt(lessonLink.dataset.module);
        const lessonId = lessonLink.dataset.lesson;
        this.navigateTo(modId, lessonId);
      }
    });

    // Mobile toggle
    document.getElementById('menuToggle')?.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('mobile-open');
    });

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (e.ctrlKey) { e.preventDefault(); this.nextLesson(); }
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (e.ctrlKey) { e.preventDefault(); this.prevLesson(); }
      }
    });
  }
};
