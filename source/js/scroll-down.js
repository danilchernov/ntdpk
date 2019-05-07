;(function($) {
  'use strict';
  const $scrolls = $('[js-scroll-down]');
  if ($scrolls.length != 0) {
    $scrolls.each(function() {
      const $scrollDown = $(this);
      $scrollDown.off('click.scrollDown').on('click.scrollDown', scroll);

      function scroll(event) {
        event.preventDefault();
        const $header = $('[js-header]');
        const $intro = $('[js-intro]');
        let heightForScroll = $intro.height() - $header.height();

        $('html, body').animate({ scrollTop: heightForScroll }, 600);
      }
    });
  }
}(jQuery));