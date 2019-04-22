;(function($) {
  'use strict';
  /* Check viewport. Slider will be init only in below 768px of viewport */
  const $sliders = $('[js-slider]');
  if ($sliders.length != 0) {
    let documentWidth = $(document).innerWidth();
    if (documentWidth < 768) {
      $sliders.each(function() {
        const $slider = $(this);
        $slider.addClass('owl-carousel');
        $slider.owlCarousel({
          dotsClass: 'slider__dots',
          dotClass: 'slider__dot',
          items: 1,
          dots: true,
          loop: true,
        });
        console.log($slider);
      });
    }
  }

}(jQuery));