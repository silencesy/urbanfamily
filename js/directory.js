$(function(){
    // 轮播
    var directorySwiper = new Swiper('.directorySwiper', {
      slidesPerView: 4.5,
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

    // 添加评论弹出框
    $('#addComment').click(function() {
        $('.outBox').show();
        $('.info-popup').show();
        $('.info-popup-backdrop').show();
    });
    
    $('.info-cancel').click(function() {
        $('.outBox').hide();
        $('.info-popup').hide();
        $('.info-popup-backdrop').hide();
    });

    $('.info-popup-backdrop').click(function() {
        $('.outBox').hide();
        $('.info-popup').hide();
        $('.info-popup-backdrop').hide();
    });

    $("#commentForm").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {
            
            // ajax
            alert('成功提交');

        },
        descriptions: {
            comment: {
                required: 'Please enter your comment!'
            }
        }
    });

});