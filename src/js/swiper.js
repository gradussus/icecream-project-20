var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    effect: 'creative',
    creativeEffect: {
      prev: {
        scale: 0,
       
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
  });