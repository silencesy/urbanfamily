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
            // city: {
            //     required: 'Please enter your city!'
            // },
            EnglishName: {
                required: 'Please enter English name!'
            },
            ChineseName: {
                required: 'Please enter Chinese name!'
            },
            address: {
                required: 'Please enter address!'
            },
            ChineseAddress: {
                required: 'Please enter Chinese address!'
            },
            phoneNumber: {
                required: 'Please enter phone number!',
                pattern: 'Please enter a 11-digit valid phone number!'
            },
            hours: {
                required: 'Please enter opening hours!'
            },
            emailVenue: {
                required: 'Please enter email!',
                pattern: 'Please enter a valid email address!'
            },
            website: {
                required: 'Please enter website!',
                pattern: 'Please enter a valid website!'
            },
            description: {
                required: 'Please enter description!',
                pattern: 'Description(Maximum 1000 characters)!'
            },
            name: {
                required: 'Please enter your name!'
            },
            email: {
                required: 'Please enter your email!',
                pattern: 'Please enter a valid email address!'
            },
            phone: {
                required: 'Please enter your phone number!',
                pattern: 'Please enter a 11-digit valid phone number!'
            }
        }
    });

});