r = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // breakpoint للشاشات الكبيرة
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // breakpoint للشاشات الصغيرة
    767: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
