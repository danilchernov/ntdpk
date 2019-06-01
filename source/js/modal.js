;(function($){
  'use strict';
  
  const $modal = $('[js-modal]');
  if ($modal.length != 0) {
    
    /* 
      * Find all the necessary components
    */
    const $calls = $('[js-call]');
    const $close = $modal.find('[js-modal-close]');
    const $container = $modal.find('[js-modal-container]');


    /* 
      * Show Modal
    */
    $calls.each(function() {
      const $call = $(this);

      $call.off('click.modal').on('click.modal', showModal);

      function showModal (event) {
        event.preventDefault();

        $modal.addClass('is-open');
        setTimeout(() => {
          $container.addClass('is-open');
        }, 300);
      }
    });

    /* 
      * Close Modal
    */
    $close.off('click.modal.close').on('click.modal.close', closeModal);

    function closeModal() {
      event.preventDefault();

      $container.removeClass('is-open');
      setTimeout(() => { 
        $modal.removeClass('is-open');
      }, 300);
    }

    /* 
      * Close modal via esc
    */

    $(document).keydown((event) => {
      if (event.keyCode == 27) { 
        closeModal();
      }
    });

    /* 
      * Close modal if there was a click outside the form
    */

    $(document).on('click', (event) => {
      const $target = $(event.target);
      if ($target.hasClass('modal')) {
        closeModal();
      }
    });
  }
}(jQuery));