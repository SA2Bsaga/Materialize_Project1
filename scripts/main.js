'use strict';

/*
 * Plugin: scroll2Top
 * A simple customizable plugin for scrolling back to top of page
 * Author: Arturo Simon
 * Version: 1.0.0
 * Updated: March 10th, 2014
*/
(function (b, a, c) {
  b.fn.scroll2Top = function (d) {
    var e = { appearAt: 250, fadeSpeed: 200, scrollSpeed: 600 };return this.each(function () {
      var g = b.extend({}, e, d),
          f = b(this);f.on('click', function (h) {
        h.preventDefault();b('html, body').animate({ scrollTop: 0 }, g.scrollSpeed);
      });b(a).scroll(function () {
        if (b(this).scrollTop() > parseInt(g.appearAt)) {
          f.fadeIn(g.fadeSpeed);
        } else {
          f.fadeOut(g.fadeSpeed);
        }
      });
    });
  };
})(jQuery, window);
'use strict';

$(document).ready(function () {
  $('.brand-logo').hide().toggle('drop');
  $('#photo1').hide().delay(1100).show('drop');
  $('#photo2').hide().delay(2200).show('drop');
  $('.parallax-container').hide().fadeIn(1000);
  $('.parallax').parallax();

  $('.tlt').textillate({ in: { effect: 'fadeInLeft' } });
  $('#to_the_top').scroll2Top({
    appearAt: 650,
    scrollSpeed: 150
  });
});

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});