;(function($){
  'use strict';
  const $modal = $('[js-modal]');
  if ($modal.length != 0) {
    const $calls = $('[js-call]');
    const $close = $modal.find('[js-modal-close]');
    const $content = $modal.find('[js-modal-content]');


    $calls.each(function() {
      const $call = $(this);
      $call.on('click', (event) => {
        event.preventDefault();
        $modal.addClass('is-open');
        setTimeout(() => {
          $content.addClass('is-open');
        }, 300);
      });
    });

    $close.on('click', (event) => {
      $content.removeClass('is-open');
      setTimeout(() => { 
        $modal.removeClass('is-open');
      }, 300);
    });

    /**
     * * Check accurate click
     * * Add / Remove classes to hide the modal window
     */

    $(document).on('click', (event) => {
      const $target = $(event.target);
      if ($target.hasClass('modal')) {
        $content.removeClass('is-open');
        setTimeout(() => { 
          $target.removeClass('is-open');
        }, 300);
      }
    });

    /**
     * TODO: Сделать событие для ESC
     */

    const $calls = $('[js-call]');
    $calls.each(function() {
      const $call = $(this);
      $call.on('click', (event) => {
        event.preventDefault();
        $modal.addClass('is-open');
        setTimeout(() => {
          $content.addClass('is-open');
        }, 300);
      });
    });
  }
}(jQuery));

// ;(function($){
//   const $calls = $('[js-call]');
//   if ($calls.length != 0) {
//     /* Check accurate click */
//     $(document).on('click', (event) => {
//       const $target = $(event.target);
//       if ($target.hasClass('overlay'))  {
//         $target.find('[js-modal]').removeClass('is-open');
//         setTimeout(() => {
//           $target.removeClass('is-open');
//         }, 300);
//       }
//     });

//     const $modal = $(['js-modal']);
//     $modal.wrap('<div class="overlay"></div>')
//     $calls.each(function() {
//       const $call = $(this);
//       $call.off('click').on('click', (event) => {
//         event.preventDefault();
//         $modal.parents('.overlay').addClass('is-open');
//         setTimeout(() => {
//           $modal.addClass('is-open')
//         }, 300);
//       });
//     });
//   }
// }(jQuery));