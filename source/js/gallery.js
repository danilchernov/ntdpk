
;(function($) {
  'use strict';
  const $galleries = $('[js-gallery]');

  if ($galleries.length != 0) {
    $.fancybox.defaults.i18n.ru = {
      CLOSE       : 'Закрыть',
      NEXT        : 'Следующий слайд',
      PREV        : 'Предыдущий',
      ERROR       : 'Запрашиваемый контент не может быть загружен. Пожалуйста, попробуйте позже 😢',
      PLAY_START  : 'Начать слайд-шоу',
      PLAY_STOP   : 'Закончить слайд-шоу',
      FULL_SCREEN : 'Полноэкранный режим',
      THUMBS      : 'Миниатюры',
      DOWNLOAD    : 'Скачать',
      SHARE       : 'Поделиться',
      ZOOM        : 'Увеличить'
    };
  
    $.fancybox.defaults.lang = 'ru';
  }
}(jQuery, jQuery.fancybox));

