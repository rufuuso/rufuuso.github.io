var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });