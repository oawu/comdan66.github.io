/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {

  window.mainLoading = $('<div />').attr ('id', 'main_loading').append ($('<div />')).appendTo ($('body'));

  window.closeLoading = function () {
    this.mainLoading.fadeOut (function () {
      $(this).hide (function () {
        $(this).remove ();
      });
    });
  };
});