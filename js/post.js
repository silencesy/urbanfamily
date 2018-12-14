$(function(){
    // 轮播
    var postSwiper = new Swiper('.postSwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

});