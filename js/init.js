(function($){
  $(function(){
    console.log("Oh hay.");
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    function switchColor () {
      var colors = ['white', 'lightgray', 'dimgray', 'salmon', 'salmon', 'white', 'white', 'blue', 'blue'];

      if (length >= colors.length) length = 0;
        $('h1.header').css('color', colors[length++]);
        setTimeout(switchColor, 2500);
    }

  switchColor();

  // Smooth Scroll to Anchor Tags
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - $(".nav-wrapper").height() + 1
          }, 1250);
          return false;
      }
    }
  });

  $(window).scroll(function(){
    removeActionClass();
    var windowTop = $(window).scrollTop() + $(".nav-wrapper").height();
    if (($("#contact").offset().top) < windowTop ) {
      $("nav ul a.nav-contact").addClass("active");
    } else if (($("#about").offset().top) < windowTop ) {
     $("nav ul a.nav-about").addClass("active");
    } else if (($("#work").offset().top) < windowTop ) {
      $("nav ul a.nav-work").addClass("active");
    }
  });

  $("nav ul a").on("click", function(){
    // removeActionClass() gets inherited from scroll event
    $(this).addClass("active");
  });

  function removeActionClass(){
    $("nav ul a").each(function(){
      $(this).removeClass("active");
    });
  }

  // Hacky Hovers
  $(".fa-button").on("mouseenter", function() {
    $(this).find(".fa").css("margin-left", ".75rem");
  });

  $(".fa-button").on("mouseleave", function() {
    $(this).find(".fa").css("margin-left", ".5rem");
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
