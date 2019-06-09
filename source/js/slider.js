;(function($) {
  'use strict';
  /* Check viewport. Slider will be init only in below 768px of viewport */
  const $sliders = $('[js-slider]');
  if ($sliders.length != 0) {

    $sliders.each(function() {
      const $slider = $(this);

      // Сount slider for active dots. If them <= 4, dots is active, and nav is disactive.
      let childrens = countSlides();
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
          dots: childrens,
          nav: !childrens,
          navContainerClass: 'slider__navigation',
          navClass: ['slider__arrow slider__arrow--prev','slider__arrow slider__arrow--next'],
          navText: ['<svg class="slider__icon" viewBox="0 0 25 25" width="25" height="25"> <use xlink:href="images/inline-svg.svg#icon-arrow-down"></use></svg>', '<svg class="slider__icon" viewBox="0 0 25 25" width="25" height="25"> <use xlink:href="images/inline-svg.svg#icon-arrow-down"></use></svg>']
        });
      }

      function countSlides () {
        const $childrens = $slider.children();
        return ($childrens.length <= 4)? true: false;
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