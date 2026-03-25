// ============================================================
// PROGRESS TRACKING — Checklist state, reading progress
// ============================================================

const TrackProgress = {
  state: {},

  init() {
    // Use in-memory storage (localStorage not available in artifacts)
    this.state = {
      completedLessons: [],
      checklistState: {},
      lastVisited: null,
    };
  },

  markComplete(lessonId) {
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }
    this.updateSidebarProgress();
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

    // Color change at milestones
    if (fill) {
      if (checked === total) fill.style.background = '#00ff6a';
      else if (checked > total * 0.5) fill.style.background = '#4a9eff';
      else fill.style.background = 'var(--accent)';
    }
  },

  updateSidebarProgress() {
    // Could add completion indicators to sidebar
  }
};
