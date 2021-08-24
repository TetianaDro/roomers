mySwiper = new Swiper ('.new-event__slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 30,
  });

  
mySwiper = new Swiper ('.new-arrived__slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },      
      breakpoints: {
        760: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        318: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }
  });


mySwiper = new Swiper ('.brands__slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, 
      slidesPerView: 1,
      spaceBetween: 30,
  });