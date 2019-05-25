;(function($){
  'use strict';
  const $modal = $('[js-modal]');
  if ($modal.length != 0) {
    const $calls = $('[js-call]');
    const $close = $modal.find('[js-modal-close]');
    const $content = $modal.find('[js-modal-content]');

    /**
     * * Open .modal 
    */

    $calls.each(function() {
      const $call = $(this);
      $call.off('click.modal').on('click.modal', (event) => {
        event.preventDefault();
        $modal.addClass('is-open');
        setTimeout(() => {
          $content.addClass('is-open');
        }, 300);
      });
    });

    /**
     * * Close .modal 
    */
    $close.off('click.modal.close').on('click.modal.close', (event) => {
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
  }
}(jQuery));