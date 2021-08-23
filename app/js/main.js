mySwiper = new Swiper ('.new-event__slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 30,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      // breakpoints: {
      //   475: {
      //     slidesPerView: 1.35,
      //   },
      //   318: {
      //     slidesPerView: 1,
      //   },
      // }
  });
mySwiper = new Swiper ('.new-arrived__slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      spaceBetween: 30,
  });