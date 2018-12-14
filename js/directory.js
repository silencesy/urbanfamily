$(function(){
    // 轮播
    var directorySwiper = new Swiper('.directorySwiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swiperSchool = new Swiper('.swiper-school', {
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

});