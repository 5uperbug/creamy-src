$(document).ready(function() {
  // Get device dimensions
  var viewport      = getViewport();
  var aboutPos      = $('.about-section').position();
  var eventsPos     = $('.products-section').position();
  var menuOff       = 110;

  // Show/hide navbar depending on window position at loadtime
  if ($(window).scrollTop() > aboutPos.top - menuOff) {
    $('.home-nav-container').hide();
    $('#nav').show();
  } else {
    $('.home-nav-container').show();
    $('#nav').hide();
  }

  if ($(window).scrollTop() > 200 && $(window).scrollTop() < eventsPos.top + 200 && viewport.width > 991) {
    $('.sticky-social').fadeIn();
  } else {
    $('.sticky-social').hide();
  }

  $(window).on( "orientationchange", function( event ) {
    viewport = getViewport();
    modOffset();
  });

  $(window).resize(function() {
    viewport = getViewport();
    modOffset();
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > aboutPos.top - menuOff) {
      $('.home-nav-container').hide();
      $('#nav').show();
    }
    else {
      $('.home-nav-container').show();
      $('#nav').hide();
    }

    if ($(window).scrollTop() > 200 && $(window).scrollTop() < eventsPos.top + 200 && viewport.width > 991) {
      $('.sticky-social').fadeIn();
    } else {
      $('.sticky-social').hide();
    }
  });

  modOffset();

  // Add smooth scrolling to all links
  $(".scroll").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Manipulate the offset of the sections
  function modOffset() {
    // Add OR remove offset for SPA nav depending on screen
    if(viewport.width > 991) {
      $('a.anchor').css('top', '-100px');
    }
    else {
      $('a.anchor').css('top', '0');
    }
  };

  /* Set the width of the side navigation to 250px */
  $('.hamburger').click(function() {
    $('#sidenav').css('width', '250px');
    $('#sidenav a').css('opacity', '1');
  });

  /* Set the width of the side navigation to 0 */
  $('.closeNav').click(function () {
    $('#sidenav').css('width', '0');
    $('#sidenav a').css('opacity', '0');
  });

  // Get the viewport of the device
  function getViewport() {
    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
      viewPortWidth = document.documentElement.clientWidth,
      viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return {
      height: viewPortHeight,
      width: viewPortWidth
    };
  };

  $.fn.scrollBottom = function() {
    return $(document).height() - this.scrollTop() - this.height();
  };

});
