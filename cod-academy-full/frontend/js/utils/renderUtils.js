// ============================================================
// RENDER UTILS — Converts data objects to HTML
// ============================================================

const RenderUtils = {
  
  renderSection(section) {
    switch (section.type) {
      case 'text': return this.renderText(section);
      case 'keypoints': return this.renderKeypoints(section);
      case 'steps': return this.renderSteps(section);
      case 'comparison': return this.renderComparison(section);
      case 'framework': return this.renderFramework(section);
      case 'warning': return this.renderWarning(section);
      case 'tip': return this.renderTip(section);
      case 'timeline': return this.renderTimeline(section);
      case 'schedule': return this.renderSchedule(section);
      case 'checklist': return this.renderChecklist(section);
      case 'video': return this.renderVideo(section);
      case 'videos': return this.renderVideoGrid(section);
      case 'resources': return this.renderResources(section);
      case 'certificate': return this.renderCertificate(section);
      case 'comments': return this.renderComments(section);
      default: return '';
    }
  },

  renderText(s) {
    const paragraphs = s.content.split('\n\n').map(p => 
      `<p class="lesson-paragraph">${p.trim()}</p>`
    ).join('');
    return `
      <div class="content-block text-block">
        <h4 class="block-title">${s.title}</h4>
        ${paragraphs}
      </div>`;
  },

  renderKeypoints(s) {
    const items = s.points.map(p => `
      <div class="keypoint">
        <div class="keypoint-label">${p.label}</div>
        <div class="keypoint-text">${p.text}</div>
      </div>
    `).join('');
    return `
      <div class="content-block keypoints-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="keypoints-list">${items}</div>
      </div>`;
  },

  renderSteps(s) {
    const steps = s.steps.map((step, i) => `
      <div class="step-item">
        <div class="step-number">${i + 1}</div>
        <div class="step-text">${step}</div>
      </div>
    `).join('');
    return `
      <div class="content-block steps-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="steps-list">${steps}</div>
      </div>`;
  },

  renderComparison(s) {
    const headerCells = s.headers.map(h => `<th>${h}</th>`).join('');
    const rows = s.rows.map(row => {
      const cells = row.map((cell, i) => `<td class="${i === 0 ? 'row-label' : ''}">${cell}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `
      <div class="content-block comparison-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="table-scroll">
          <table class="comparison-table">
            <thead><tr>${headerCells}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  },

  renderFramework(s) {
    const stages = s.stages.map((stage, i) => `
      <div class="framework-stage" style="--stage-index: ${i}">
        <div class="stage-header">
          <div class="stage-number">${i + 1}</div>
          <div class="stage-name">${stage.name}</div>
        </div>
        <div class="stage-body">
          <p class="stage-desc">${stage.description}</p>
          <div class="stage-details">
            <div class="stage-detail"><span class="detail-label">Metrici:</span> ${stage.metrics}</div>
            <div class="stage-detail"><span class="detail-label">Ce funcționează:</span> ${stage.whatWorks}</div>
            <div class="stage-detail target"><span class="detail-label">Target KPI:</span> ${stage.targetKPI}</div>
          </div>
        </div>
        ${i < s.stages.length - 1 ? '<div class="stage-arrow">→</div>' : ''}
      </div>
    `).join('');
    return `
      <div class="content-block framework-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="framework-pipeline">${stages}</div>
      </div>`;
  },

  renderWarning(s) {
    return `
      <div class="content-block alert-block alert-warning">
        <div class="alert-title">${s.title}</div>
        <div class="alert-content">${s.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
      </div>`;
  },

  renderTip(s) {
    return `
      <div class="content-block alert-block alert-tip">
        <div class="alert-title">${s.title}</div>
        <div class="alert-content">${s.content}</div>
      </div>`;
  },

  renderTimeline(s) {
    const periods = s.periods.map(p => {
      const objectives = p.objectives.map(o => `<li>${o}</li>`).join('');
      return `
        <div class="timeline-period">
          <div class="period-label">${p.label}</div>
          <ul class="period-objectives">${objectives}</ul>
          <div class="period-expectation">${p.expectation}</div>
        </div>`;
    }).join('');
    return `
      <div class="content-block timeline-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="timeline-periods">${periods}</div>
      </div>`;
  },

  renderSchedule(s) {
    const blocks = s.blocks.map(b => `
      <div class="schedule-row">
        <div class="schedule-time">${b.time}</div>
        <div class="schedule-content">
          <div class="schedule-task">${b.task}</div>
          <div class="schedule-details">${b.details}</div>
        </div>
      </div>
    `).join('');
    return `
      <div class="content-block schedule-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="schedule-list">${blocks}</div>
      </div>`;
  },

  renderChecklist(s) {
    const items = s.items.map((item, i) => `
      <label class="checklist-item ${item.critical ? 'critical' : ''}">
        <input type="checkbox" id="check-${i}" onchange="TrackProgress.updateChecklist()">
        <span class="check-mark"></span>
        <span class="check-text">${item.text}</span>
        ${item.critical ? '<span class="critical-badge">CRITIC</span>' : ''}
      </label>
    `).join('');
    return `
      <div class="content-block checklist-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="checklist-progress">
          <div class="progress-bar"><div class="progress-fill" id="checklistProgress"></div></div>
          <div class="progress-text" id="checklistText">0 / ${s.items.length}</div>
        </div>
        <div class="checklist-items">${items}</div>
      </div>`;
  },

  // ── VIDEO — single YouTube/Vimeo embed ──────────────
  renderVideo(s) {
    const videoId = this._extractYouTubeId(s.url);
    const embedUrl = videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
      : s.url;
    return `
      <div class="content-block video-block">
        <h4 class="block-title">${s.title}</h4>
        ${s.description ? `<p class="video-desc">${s.description}</p>` : ''}
        <div class="video-container">
          <iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
        ${s.duration ? `<div class="video-meta"><span>⏱ ${s.duration}</span></div>` : ''}
      </div>`;
  },

  // ── VIDEOS — grid of clickable video thumbnails ─────
  renderVideoGrid(s) {
    const cards = s.items.map((v, i) => {
      const videoId = this._extractYouTubeId(v.url);
      const thumb = videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : '';
      return `
        <div class="video-card" onclick="RenderUtils._playVideo(this, '${v.url}')" data-index="${i}">
          <div class="video-thumb" ${thumb ? `style="background-image:url('${thumb}')"` : ''}>
            <div class="play-btn">▶</div>
            ${v.duration ? `<span class="vid-duration">${v.duration}</span>` : ''}
          </div>
          <div class="video-card-info">
            <div class="video-card-title">${v.title}</div>
            ${v.description ? `<div class="video-card-desc">${v.description}</div>` : ''}
          </div>
        </div>`;
    }).join('');
    return `
      <div class="content-block videos-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="video-player-area" id="videoPlayer" style="display:none">
          <div class="video-container"><iframe id="videoIframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <button class="close-video-btn" onclick="RenderUtils._closeVideo()">✕ Închide video</button>
        </div>
        <div class="video-grid">${cards}</div>
      </div>`;
  },

  // ── RESOURCES — links to Drive, PDFs, downloads ─────
  renderResources(s) {
    const icons = { drive: '📁', pdf: '📄', doc: '📝', sheet: '📊', link: '🔗', video: '🎬', template: '📋', tool: '🛠️' };
    const items = s.items.map(r => {
      const icon = icons[r.icon] || icons.link;
      return `
        <a href="${r.url}" target="_blank" rel="noopener" class="resource-card">
          <span class="resource-icon">${icon}</span>
          <div class="resource-info">
            <div class="resource-name">${r.title}</div>
            ${r.description ? `<div class="resource-desc">${r.description}</div>` : ''}
          </div>
          <span class="resource-arrow">→</span>
        </a>`;
    }).join('');
    return `
      <div class="content-block resources-block">
        <h4 class="block-title">${s.title}</h4>
        <div class="resources-list">${items}</div>
      </div>`;
  },

  // ── CERTIFICATE — completion badge ──────────────────
  renderCertificate(s) {
    const user = JSON.parse(localStorage.getItem('cod_user') || '{}');
    const name = user.display_name || user.username || 'Student';
    return `
      <div class="content-block certificate-block">
        <div class="certificate-card">
          <div class="cert-glow"></div>
          <div class="cert-badge">🏆</div>
          <div class="cert-title">${s.title || 'Certificat de Completare'}</div>
          <div class="cert-name">${name}</div>
          <div class="cert-desc">${s.description || 'A completat cu succes acest modul'}</div>
          <div class="cert-module">${s.moduleName || ''}</div>
          <div class="cert-date">${new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          <div class="cert-id">ID: COD-${Date.now().toString(36).toUpperCase()}</div>
        </div>
      </div>`;
  },

  // ── COMMENTS — lesson discussion ────────────────────
  renderComments(s) {
    return `
      <div class="content-block comments-block">
        <h4 class="block-title">${s.title || '💬 Discuții'}</h4>
        <div class="comments-area" id="commentsArea">
          <div class="comment-input-area">
            <textarea class="comment-input" id="commentInput" placeholder="Scrie un comentariu sau o întrebare..." rows="3"></textarea>
            <button class="comment-submit" onclick="CommentsManager.post()">Trimite</button>
          </div>
          <div class="comments-list" id="commentsList">
            <div class="comments-loading">Se încarcă comentariile...</div>
          </div>
        </div>
      </div>`;
  },

  // ── Helpers ─────────────────────────────────────────
  _extractYouTubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : null;
  },

  _playVideo(card, url) {
    const videoId = RenderUtils._extractYouTubeId(url);
    const embedUrl = videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`
      : url;
    const player = document.getElementById('videoPlayer');
    const iframe = document.getElementById('videoIframe');
    iframe.src = embedUrl;
    player.style.display = 'block';
    player.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  _closeVideo() {
    const player = document.getElementById('videoPlayer');
    const iframe = document.getElementById('videoIframe');
    iframe.src = '';
    player.style.display = 'none';
  },

};
