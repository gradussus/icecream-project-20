var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    // effect: 'cube',
    // cubeEffect: {
    //   shadow: false,
    //   slideShadows: false,
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    mousewheel: {
      invert: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3500,
    },
  });