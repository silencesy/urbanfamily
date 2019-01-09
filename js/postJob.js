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
            title: {
                required: 'Please enter job title!'
            },
            companyName: {
                required: 'Please enter company name!'
            },
            website: {
                required: 'Please enter company website!',
                pattern: 'Please enter a valid company website!'
            },
            description: {
                required: 'Please enter job description!',
                pattern: 'Job Description(Maximum 1000 characters)!'
            },
            position: {
                required: 'Please enter position requirements!',
                pattern: ' Position Requirements(Maximum 1000 characters)!'
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