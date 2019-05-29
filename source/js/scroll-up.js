;(function($) {
  const $scrolls = $('[js-scroll-up]');
  if ($scrolls.length != 0) {
    $scrolls.each(function() {
      /* 
        * Making a function to show / hide buttons while scrolling the page.
      */
      const $scroll = $(this);
      
      $(window).scroll(hideAnchor);
      
      function hideAnchor(event) {
        const $window = $(this);
        const $intro = $('[js-intro]')
        const $header = $('[js-header]');

        /* 
          * We show the button as soon as the height of the block .intro is scrolled
        */
        let heightForShowAnchor = $intro.height() - $header.height();

        if ($window.scrollTop() >= heightForShowAnchor) {
          $scroll.addClass('is-active');
        } else {
          $scroll.removeClass('is-active');
        }
      }

      if ($scroll.hasClass('scroll_up')) {
        $scroll.off('click.scrollUp').on('click.scrollUp', scroll);

        function scroll(event) {
          event.preventDefault();
          const $target = $(event.$target);
          if (!$target.hasClass('scroll_tel')) {
            $('body,html').animate({scrollTop:0},800);
          }
        }
      }

    });
  }
}(jQuery));

/* if ($scrolls.length != 0) {
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
        const $target = $(event.$target);
        if (!$target.hasClass('scroll_tel')) {
          $('body,html').animate({scrollTop:0},800);
        }
      }
    }); */