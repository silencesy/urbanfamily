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
                required: 'Please enter job title!'
            },
            eventName: {
                required: 'Please enter event name!'
            },
            where: {
                required: 'Please enter venue!'
            },
            startDate: {
                required: 'Please enter start date!'
            },
            contactEmail: {
                // required: 'Please enter contact email!',
                pattern: 'Please enter a valid contact email!'
            },
            website: {
                // required: 'Please enter your company website!',
                pattern: 'Please enter a valid company website!'
            },
            // startDate: {
            //     required: 'Please enter start time!'
            // },
            description: {
                required: 'Please enter description!',
                pattern: 'Job Description(Maximum 1000 characters)!'
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