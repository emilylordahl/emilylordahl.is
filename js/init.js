(function($){
  $(function(){
    console.log("Oh hay.");
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  //   function switchColor () {
  //     var colors = ['white', 'lightgray', 'dimgray', 'salmon', 'salmon', 'white', 'white', 'blue', 'blue'];
  //
  //     if (length >= colors.length) length = 0;
  //       $('h1.header').css('color', colors[length++]);
  //       setTimeout(switchColor, 2500);
  //   }
  //
  // switchColor();

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
    var $logotxt = $("#logo-container");
    var str = "emilylordahl.is";
    if (($("#contact").offset().top) < windowTop ) {
      $("nav ul a.nav-contact").addClass("active");
      $logotxt.text(str + "/sharing");
    } else if (($("#about").offset().top) < windowTop ) {
     $("nav ul a.nav-about").addClass("active");
     $logotxt.text(str + "/developing");
    } else if (($("#work").offset().top) < windowTop ) {
      $("nav ul a.nav-work").addClass("active");
      $logotxt.text(str + "/designing");
    } else {
      $logotxt.text(str);
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

  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);

  }); // end of document ready
})(jQuery); // end of jQuery name space

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
