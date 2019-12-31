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
  //  dots:false,
  //  navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
})

/* progress Bar */
$(function () {

    $("#progress-elements").waypoint(function () {
      $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
