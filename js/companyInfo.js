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
            companyName: {
                required: 'Please enter company name!'
            },
            address: {
                required: 'Please enter address!'
            },
            emailCompany: {
                required: 'Please enter email!',
                pattern: 'Please enter a valid email address!'
            },
            phoneNumber: {
                required: 'Please enter phone number!',
                pattern: 'Please enter a 11-digit valid phone number!'
            },
            website: {
                required: 'Please enter website!',
                pattern: 'Please enter a valid website!'
            },
            description: {
                required: 'Please enter description!',
                pattern: 'Description(Maximum 1000 characters)!'
            }
        }
    });

});