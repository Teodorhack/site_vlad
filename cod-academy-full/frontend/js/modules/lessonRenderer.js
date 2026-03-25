// ============================================================
// LESSON RENDERER — Renders full lesson content
// ============================================================

const LessonRenderer = {
  
  render(mod, lesson) {
    const main = document.getElementById('lessonContent');
    const sections = lesson.sections.map(s => RenderUtils.renderSection(s)).join('');
    
    // Build prev/next nav
    const lessons = mod.lessons;
    const idx = lessons.findIndex(l => l.id === lesson.id);
    const prevLesson = idx > 0 ? lessons[idx - 1] : null;
    const nextLesson = idx < lessons.length - 1 ? lessons[idx + 1] : null;

    main.innerHTML = `
      <div class="lesson-header" style="--mod-color: ${mod.color}">
        <div class="lesson-breadcrumb">
          <span class="breadcrumb-module">${mod.icon} Modulul ${mod.id}</span>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-lesson">Lecția ${lesson.id}</span>
        </div>
        <h1 class="lesson-main-title">${lesson.title}</h1>
        <div class="lesson-meta-bar">
          <span class="meta-item"><span class="meta-icon">⏱</span> ${mod.estimatedTime}</span>
          <span class="meta-item"><span class="meta-icon">📊</span> ${mod.difficulty}</span>
          ${mod.tags.map(t => `<span class="meta-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="lesson-body">
        ${sections}
      </div>

      <div class="lesson-nav-footer">
        ${prevLesson ? `
          <button class="nav-btn prev-btn" onclick="Navigation.prevLesson()">
            <span class="nav-arrow">←</span>
            <span class="nav-info">
              <span class="nav-label">Lecția anterioară</span>
              <span class="nav-title">${prevLesson.title}</span>
            </span>
          </button>
        ` : '<div></div>'}
        ${nextLesson ? `
          <button class="nav-btn next-btn" onclick="Navigation.nextLesson()">
            <span class="nav-info">
              <span class="nav-label">Lecția următoare</span>
              <span class="nav-title">${nextLesson.title}</span>
            </span>
            <span class="nav-arrow">→</span>
          </button>
        ` : `
          <button class="nav-btn next-btn complete-btn" onclick="Navigation.navigateTo(${mod.id + 1}, '${mod.id + 1}.1')">
            <span class="nav-info">
              <span class="nav-label">Modulul următor</span>
              <span class="nav-title">Modulul ${mod.id + 1}</span>
            </span>
            <span class="nav-arrow">→</span>
          </button>
        `}
      </div>
    `;

    // Animate in
    main.querySelectorAll('.content-block').forEach((block, i) => {
      block.style.opacity = '0';
      block.style.transform = 'translateY(20px)';
      setTimeout(() => {
        block.style.transition = 'all 0.4s ease';
        block.style.opacity = '1';
        block.style.transform = 'translateY(0)';
      }, i * 80);
    });
  },

  renderComingSoon(mod) {
    const main = document.getElementById('lessonContent');
    main.innerHTML = `
      <div class="coming-soon-page">
        <div class="coming-soon-icon">${mod.icon}</div>
        <h1>Modulul ${mod.id}: ${mod.title}</h1>
        <p class="coming-soon-subtitle">${mod.subtitle}</p>
        <div class="coming-soon-badge">ÎN DEZVOLTARE</div>
        <p class="coming-soon-text">Acest modul va fi dezvoltat complet. Cere-mi să-l generez scriind:<br>
        <code>"Dezvoltă Modulul ${mod.id}"</code></p>
      </div>
    `;
  }
};
