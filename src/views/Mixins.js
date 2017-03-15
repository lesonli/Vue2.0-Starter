export var Verification = {
    methods: {
        handleCheckUser(username, password) {
            //验证手机号
            if (username.length > 0) {
                var reg1 = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/);

                if (!reg1.test(username)) {
                    alert('请输入有效的手机号');
                    return false;
                }
            } else {
                alert('请输入手机号!');
                return false;
            }

            if (password.length > 0) {
                var reg2 = new RegExp(/^[a-zA-Z0-9_]*$/);

                if (password.length < 6 || password.length > 19) {
                    alert('密码长度必须为6-19位');
                    return false;
                }

                if (!reg2.test(password)) {
                    alert('密码中只能包含英文字母，数字，下划线');
                    return false;
                }
            } else {
                alert('请输入密码!');
                return false;
            }

            return true;
        },
        handleMessageIdentification(sms_code) {
            if (sms_code.length == 0) {
                alert('请输入验证码');
                return false;
            }
            return true;
        },
        handleCorrectPhone(username) {
            if (username.length > 0) {
                var reg1 = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/);

                if (!reg1.test(username)) {
                    alert('请输入有效的手机号');
                    return false;
                }
            } else {
                alert('请输入手机号!');
                return false;
            }

            return true;
        }
    }
}
