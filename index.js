$(document).ready(function () {
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var topDist = $('#container').position();
    if (scroll > topDist.top) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (scroll > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  //slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ['Passion', 'Creativity', 'Curiosity'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed2 = new Typed(".typing-2", {
    strings: ['Passion', 'Creativity', 'Curiosity'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
