;(function($) {
  const $scrolls = $('[js-scroll-up]');
  if ($scrolls.length != 0) {
    $scrolls.each(function() {
      const $scroll = $(this);
      $scroll.off('click.scrollUp').on('click.scrollUp', scroll);

      $(window).scroll(hideAnchor);
      
      function hideAnchor(event) {
        const $window = $(this);
        const $intro = $('[js-intro]')
        const $header = $('[js-header]');

        let heightForShowAnchor = $intro.height() - $header.height();

        if ($window.scrollTop() >= heightForShowAnchor) {
          $scroll.addClass('is-active');
        } else {
          $scroll.removeClass('is-active');
        }
      }
      
      function scroll(event) {
        event.preventDefault();
        $('body,html').animate({scrollTop:0},800);
      }
    });

    /* 
      !A simple solution to disable events on a button with a phone, but deadlines are on, fix it in any convenient case or create it (Expand scroll to 2 parts: Function to display the element and function with scroll) 
    */

    $($scrolls[1]).off('click.scrollUp');

    
  }
}(jQuery));