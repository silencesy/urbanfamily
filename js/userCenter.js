$(function(){
    $('.icon-all, .icon-collents, .icon-like, .icon-dislike').on('click', function() {
        var type = this.dataset.type;
        switch(type) {
            case 'icon-all': {
                $('.icon-all').addClass('actveListing');
                $('.icon-collents, .icon-like, .icon-dislike').removeClass('actveListing');
                $('.listHeart, .listLike, .listHeartLike, .listNotLike').css('display', 'block');
                  break;
            }
            case 'icon-collents': {
                $('.icon-collents').addClass('actveListing');
                $('.icon-all, .icon-like, .icon-dislike').removeClass('actveListing');
                $('.listHeart, .listHeartLike').css('display', 'block');
                $('.listLike, .listNotLike').css('display', 'none');
                break;
            }
            case 'icon-like': {
                $('.icon-like').addClass('actveListing');
                $('.icon-all, .icon-collents, .icon-dislike').removeClass('actveListing');
                $('.listLike, .listHeartLike').css('display', 'block');
                $('.listHeart, .listNotLike').css('display', 'none');
                break;
            }
            case 'icon-dislike': {
                $('.icon-dislike').addClass('actveListing');
                $('.icon-all, .icon-collents, .icon-like').removeClass('actveListing');
                $('.listNotLike').css('display', 'block');
                $('.listHeart, .listLike, .listHeartLike').css('display', 'none');
                break;
            }
        }
    });

    // 修改昵称
    $('#name').click(function() {
        $('.outBoxN').show();
        $('.info-popupN').show();
        $('.info-popup-backdropN').show();
    });
    
    $('.info-cancel').click(function() {
        $('.outBoxN').hide();
        $('.info-popupN').hide();
        $('.info-popup-backdropN').hide();
    });

    $('.info-popup-backdropN').click(function() {
        $('.outBoxN').hide();
        $('.info-popupN').hide();
        $('.info-popup-backdropN').hide();
    });

    $("#resetName").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {
            
            // ajax
            alert('成功提交');

        },
        descriptions: {
            nickName: {
                required: 'Please enter your name!'
            }
        }
    });


    // 重置密码
    $('#reset').click(function() {
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

    $("#resetPassword").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {
            
            // ajax
            alert('成功提交');

        },
        descriptions: {
            currentPassword: {
                required: 'Please enter your original password!',
                pattern: 'The original password is incorrect!'
            },
            newPassword: {
                required: 'Please enter your new password!',
                pattern: 'Please enter your new password with 6-16 digits (must contain numbers and letters)!'
            },
            newPasswordAgain: {
                required: 'Please enter your new password!',
                pattern: 'The two passwords you entered did not match!'
            }
        }
    });
  

});