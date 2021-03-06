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
            title: {
                required: 'Please enter title!'
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