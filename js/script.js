/*Preloader*/
$(window).on('load', function() { //makes sure whole website is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/*Team Section*/

$(function() { //this is document.ready method of jscript written in jquery form
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left fa-3x"></i>', '<i class="fa fa-angle-right fa-3x"></i>']
  });
});

/* progress Bar */
$(function() {

  $("#progress-elements").waypoint(function() {
    $(".progress-bar").each(function() {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 2000);
    });
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });
});


/*Responsive Tabs*/


$(function() {

  $("#services-tabs").responsiveTabs({
    animation: 'slide'
  });

});

/*Work Section*/


$(window).on('load', function() {

  // Initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function() {

    // get filter value
    var filterValue = $(this).attr('data-filter');

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // active button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/*Magnifier*/
$(function() {

  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});


/*Testimonial*/
$(function() { //this is document.ready method of jscript written in jquery form
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left fa-3x"></i>', '<i class="fa fa-angle-right fa-3x"></i>']
  });
});

/*Stats section*/
$(function() {
      $(".counter").counterUp({
        delay: 10,
        time: 2000
      });
  });

/*Clients Section*/
$(function() { //this is document.ready method of jscript written in jquery form
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left fa-3x"></i>', '<i class="fa fa-angle-right fa-3x"></i>']
  });
});
