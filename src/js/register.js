// 注册

window.addEventListener('load',function(){
    var form = document.forms[0];
    var getUserInfo = function(){
        var value ={};
        for(var i=0,len=form.elements.length;i<len;i++){
            var el = form.elements[i];
            if(/text|password/.test(el.type)){
                value[el.name] = el.value;
            }
        }
        return value;
    };
    form.addEventListener('submit',function(e){
        e.preventDefault();
        var userInfo = getUserInfo();
        localStorage.setItem(userInfo.userName,JSON.stringify(userInfo));
        location.href = 'login.html';
    });
});

