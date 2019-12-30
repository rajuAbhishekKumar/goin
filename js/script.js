$(window).on('load', function() { //makes sure whole website is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
})
$(function() { //this is document.ready method of jscript written in jquery form
  $("#team-members").owlCarousel({
    items: 2,
    autoplay:true,
    smartspeed: 700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
})
