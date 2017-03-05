$(document).ready(function() {
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

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});