/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
  var $works = $('#works');
  var masonry = null;

  var setWorkFeature = function ($obj) {
    $obj.imagesLoaded (function () {
      $obj.find ('.img').css ({'height': $obj.show ().find ('.img img').css ('height')}).imgLiquid ({verticalAlign: 'center'});
      masonry.appended ($obj.get (0));
      return $obj;
    });
  };

  $work = $('.work').clone ();
  $('.work').remove ();
  masonry = new Masonry ($works.get (0), { itemSelector: '.work', columnWidth: 1, transitionDuration: '0.3s', visibleStyle: { opacity: 1, transform: 'none' }});
  $work.each (function () { setWorkFeature ($(this).appendTo ($works).hide ()); });

  window.closeLoading ();
});