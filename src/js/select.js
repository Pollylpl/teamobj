
'use strict';

var str=window.location.href;
//解码方法；
var movid=(str.split("?")[1]);

 $.get("../dist/data/movie1.json",function(data){
        for(var i=0;i<data.length;i++){
            if(data[i].movie_id==movid){

                $("header h3").html("星美国际影城-"+data[i].branch);
                $(".top_news p").html(data[i].movie_name);
            }
        }
 })


var num = document.getElementById('num');
var numList = num.getElementsByTagName('li');
var ul = document.getElementById('parentUl');
var html = '';
for(var i = 0; i<numList.length*12;i++){
    var li = document.createElement("li");
    html +="<li></li>";
}
ul.innerHTML=html;


var li = parentUl.getElementsByTagName('li');
var news = document.getElementById('news');
var sure = document.getElementById('sure');
var row='';
var col = '';

var zz2 = document.getElementById('zz2');
var flag = true;
for(var j=0;j<li.length;j++){

    li[j].index=j;
    li[j].flag = flag;


    li[j].onclick=function(){

        if(this.flag){
            li[this.index].style.backgroundImage = "url('../dist/img/active.png')";
            sure.style.backgroundColor = "#e76a00";
            row = Math.ceil((this.index+1)/12);
            col =(this.index)%12+1;
            var span = document.createElement('span');
            span.setAttribute("id",this.index);
            span.style.display="block";
            span.innerHTML = row+'排'+col+'座';
            news.appendChild(span);

            var spanlist = news.getElementsByTagName('span');
            if(spanlist.length>4){
                li[this.index].style.backgroundImage = "url('../dist/img/seat.png')";
                zz2.style.display = 'block';
            }
            console.log(spanlist.length)

        }
        else{
            li[this.index].style.backgroundImage = "url('../dist/img/seat.png')";
            var ids="#"+this.index;
            $(ids).remove();
        }

        this.flag=!this.flag;
        $("#yes").click(function(){
            zz2.style.display = 'none';
            if(spanlist.length>4){
                $('#news span').eq(spanlist.length-1).remove();
            }

        });
    }
}



var zz = document.getElementById('zz');
sure.onclick=function(){
    zz.style.display = 'block';
}
$("#ok").click(function(){
    zz.style.display = 'none';
    window.location.href = "FirmOrder.html";
});

$("#cancle").click(function(){
    zz.style.display = 'none';
    window.location.href = "select.html";
});





