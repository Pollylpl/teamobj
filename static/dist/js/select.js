"use strict";var str=window.location.href,movid=str.split("?")[1];$.get("../dist/data/movie1.json",function(e){for(var t=0;t<e.length;t++)e[t].movie_id==movid&&($("header h3").html("星美国际影城-"+e[t].branch),$(".top_news p").html(e[t].movie_name))});for(var num=document.getElementById("num"),numList=num.getElementsByTagName("li"),ul=document.getElementById("parentUl"),html="",i=0;i<12*numList.length;i++){var li=document.createElement("li");html+="<li></li>"}ul.innerHTML=html;for(var li=parentUl.getElementsByTagName("li"),news=document.getElementById("news"),sure=document.getElementById("sure"),row="",col="",zz2=document.getElementById("zz2"),flag=!0,j=0;j<li.length;j++)li[j].index=j,li[j].flag=flag,li[j].onclick=function(){if(this.flag){li[this.index].style.backgroundImage="url('../dist/img/active.png')",sure.style.backgroundColor="#e76a00",row=Math.ceil((this.index+1)/12),col=this.index%12+1;var e=document.createElement("span");e.setAttribute("id",this.index),e.style.display="block",e.innerHTML=row+"排"+col+"座",news.appendChild(e);var t=news.getElementsByTagName("span");t.length>4&&(li[this.index].style.backgroundImage="url('../dist/img/seat.png')",zz2.style.display="block"),console.log(t.length)}else{li[this.index].style.backgroundImage="url('../dist/img/seat.png')";var n="#"+this.index;$(n).remove()}this.flag=!this.flag,$("#yes").click(function(){zz2.style.display="none",t.length>4&&$("#news span").eq(t.length-1).remove()})};var zz=document.getElementById("zz");sure.onclick=function(){zz.style.display="block"},$("#ok").click(function(){zz.style.display="none",window.location.href="FirmOrder.html"}),$("#cancle").click(function(){zz.style.display="none",window.location.href="select.html"});