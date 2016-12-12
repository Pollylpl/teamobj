// 登录

window.addEventListener('load',function(){
    var form = document.forms[0];
    form.addEventListener('submit',function(e){
        e.preventDefault();
        var userName = form.userName.value;
        var pwd = form.pwd.value;
        var userInfo = JSON.parse(localStorage.getItem(userName));
        if(userInfo && userInfo.pwd === pwd){
            return location.href = 'me.html';
        }
        //alert('登录失败 用户名或密码错误!');
    });

});