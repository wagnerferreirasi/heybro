(function($){
  $(function(){
    $('.slider').slider();
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();

  }); // end of document ready
})(jQuery); // end of jQuery name space
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  padding: 0,
  indicators: true
}, setTimeout(autoplay, 4500));

function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}