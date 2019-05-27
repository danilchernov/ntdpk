;(function($) {
  $('.tooltip').tooltipster({
    theme: 'tooltipster-punk',
    trigger:"custom",
    triggerOpen: {
      click: true,  // For mouse
      tap: true    // For touch device
    },
    triggerClose: {
      click: true,  // For mouse
      tap: true    // For touch device
    },
    zIndex: 3,
  });
}(jQuery));