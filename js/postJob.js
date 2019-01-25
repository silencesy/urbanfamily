$(function(){

    $("#addPost").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {
            
            // ajax
            alert('成功提交');

        },
        descriptions: {
            position: {
                required: 'Please enter position!'
            },
            companyName: {
                required: 'Please enter company name!'
            },
            description: {
                required: 'Please enter description!',
                pattern: 'Description(Maximum 1000 characters)!'
            },
            requirements: {
                required: 'Please enter requirements!',
                pattern: ' Requirements(Maximum 1000 characters)!'
            }
        }
    });

    // jobs提交弹框
    $('#jobSubmit').click(function() {
        $('.outBoxJ').show();
        $('.info-popupJ').show();
        $('.info-popup-backdropJ').show();
    });
    
    $('.info-cancel').click(function() {
        $('.outBoxJ').hide();
        $('.info-popupJ').hide();
        $('.info-popup-backdropJ').hide();
    });

    $('.info-popup-backdropJ').click(function() {
        $('.outBoxJ').hide();
        $('.info-popupJ').hide();
        $('.info-popup-backdropJ').hide();
    });

});