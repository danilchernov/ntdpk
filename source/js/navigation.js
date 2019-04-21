;(function($) {
  'use strict';
  const $headers = $('[js-header]');
  if ($headers.length != 0) {
    $headers.each(function() {
      const $header = $(this);
      const $toggle = $header.find('[js-navigation-toggle]');
      const $nav = $header.find('[js-navigation]');

      $toggle.off('click.nav').on('click.nav', (event) => {
        event.preventDefault();
        $toggle.toggleClass('is-active');
        $nav.slideToggle();
      });
    });
  }
}(jQuery));
