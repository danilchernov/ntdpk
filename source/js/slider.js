;(function($) {
  'use strict';
  /* Check viewport. Slider will be init only in below 768px of viewport */
  const $sliders = $('[js-slider]');
  if ($sliders.length != 0) {

    $sliders.each(function() {
      const $slider = $(this);
      
      checkViewWidth();

      function checkViewWidth() {
        let viewWidth = $(document).innerWidth();
        const maxViewWidth = 768;
        
        if (viewWidth < maxViewWidth) {
          initialize();
          return true
        } else {
          destroy();
          return false;
        }
      }

      function initialize () {
        $slider.addClass('owl-carousel');
        $slider.owlCarousel({
          dotsClass: 'slider__dots',
          dotClass: 'slider__dot',
          items: 1,
          dots: true,
          loop: true
        });
      }

      function destroy() {
        $slider.trigger('destroy.owl.carousel');
        $slider.removeClass('owl-carousel');
        return $slider;
      }

      $(window).resize((event) => {
        checkViewWidth();
      });
    });

  }

}(jQuery));