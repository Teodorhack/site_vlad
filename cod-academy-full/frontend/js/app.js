// ============================================================
// APP.JS — Main entry point, initializes all modules
// ============================================================

const App = {
  init() {
    TrackProgress.init();
    Navigation.init();
    this.injectCalculatorWidget();
    console.log('[COD Platform] Initialized');
  },

  injectCalculatorWidget() {
    // The calculator will be injected into the lesson body when lesson 1.3 is active
    // It's also available globally via the tools section
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => App.init());
