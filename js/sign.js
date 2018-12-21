$(function(){

    // 第一步手机号 验证码验证
    var codeBtn = document.getElementById('codeBtn');
    var countdown=60;
    $('#codeBtn').on('click',function(event) {
        var phone = $.trim($("#phoneT").val());
        console.log(phone)
        if (!phone) {
            $.mvalidateTip("Please enter your phone!");
            return;
        } else if (!(/^0?1[3|4|7|5|8|9][0-9]\d{8}$/.test(phone))) {
            $.mvalidateTip("Please enter a 11-digit valid number!");
            return;
        }   
        settime(this);
        // 发送ajax获取验证码
        $.ajax({
            
        })
    });
    $("#passwordPhone").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {
            
            // ajax
            alert('成功提交');

        },
        descriptions: {
            phone: {
                required: 'Please enter your phone!',
                pattern: 'Please enter a 11-digit valid number!'
            },
            phoneCode: {
                required: 'Please enter the verification code!',
            }
        }
    });

    // 第二步新密码验证
    $("#passwordSecond").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {
            
            // ajax
            alert('成功提交');

        },
        descriptions: {
            password: {
                required: 'Please enter your new password!',
                pattern: 'Please enter your new password with 6-16 digits (must contain numbers and letters)!'
            },
            newPassword: {
                required: 'Please enter your new password!',
                pattern: 'Please enter your new password with 6-16 digits (must contain numbers and letters)!'
            }
        }
    });

    // 验证码
    function settime(obj) {   
        if (countdown == 0) {   
            obj.removeAttribute("disabled");  
            obj.style.backgroundColor = "#F08D0E";  
            obj.style.color = "#fff"; 
            obj.value="Send code";   
            countdown = 60;   
            return;  
        } else {   
            obj.setAttribute("disabled", true);
            obj.style.backgroundColor = "#6A6A6A"; 
            obj.style.color = "#fff";   
            obj.value = countdown+ "s";   
            countdown--;   
        }   
        setTimeout(function() {   
            settime(obj);
        },1000);
    }
    
});