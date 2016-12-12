/*
* @Author: Marte
* @Date:   2016-12-08 14:22:10
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-11 20:04:14
*/

'use strict';


//轮播
var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',
    loop: true,

    // 如果需要分页器
    //pagination: '.swiper-pagination',
    //paginationClickable: true,
    // 如果需要前进后退按钮
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
    autoplay: 2000
});

var aBtn=document.getElementById('back');
window.onscroll=function(){
    var sTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(sTop>=50)
    {
        aBtn.style.display="block";
    }
    else{
        aBtn.style.display="none";
    }

    //判断是定时器触发滚动事件还是人为触发
    //  定时器每次执行一次改变scrollTop之前先给他设状态为true; 一旦触发滚动事件给他设为false,以便下次再进来时做判断
    if(isTimer==true){
        isTimer=false;    //定时器
    }
    else{
        clearInterval(timer);
    }
}

var timer=null;
var speed=0;
var isTimer=false;
aBtn.onclick=function(){
    clearInterval(timer);
    timer=setInterval(function(){
        var sTop=document.documentElement.scrollTop||document.body.scrollTop;
        speed=sTop/2;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(sTop==50)
        {
            clearInterval(timer);
        }
        else{
            isTimer=true;
            document.documentElement.scrollTop=sTop-speed;
            document.body.scrollTop=sTop-speed;
        }
    },30);
}

$.get("dist/data/movie1.json",function(data){
   // console.log(data)
    var arr = [];
    for(var i=0;i<data.length;i++){
        arr.push(data[i]);
    }
    arr.splice(4);
    var moviedata = arr;
    function render ( moviedata ) {

        var tpldata = {
            list : moviedata
        }
        var html = template('movietpl', tpldata);
        //console.log(html);
        document.getElementById('mv').innerHTML = html;

    }
    render(moviedata);

});

/*var mv = document.getElementById('mv');
var ulLiist = document.getElementsByTagName('ul');
for(var i=0;i<ulLiist.length;i++){
    ulLiist[.
}*/




