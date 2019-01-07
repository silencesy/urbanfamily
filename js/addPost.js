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
                required: 'Please enter your title!'
            },
            description: {
                required: 'Please enter your description!',
                pattern: 'Maximum 1000 characters!'
            },
            name: {
                required: 'Please enter your name!'
            },
            email: {
                required: 'Please enter your email!',
                pattern: 'Please enter a valid email address!'
            },
            phone: {
                required: 'Please enter your phone!',
                pattern: 'Please enter a 11-digit valid number!'
            }
        }
    });

});