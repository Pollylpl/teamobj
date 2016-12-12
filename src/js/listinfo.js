/*
* @Author: Marte
* @Date:   2016-12-08 18:16:33
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-10 16:17:11
*/

// 'use strict';
var disc=0;;
var target=document.getElementById("imgs_ul")
touch.on("#imgs_ul","touchstart",function (ev){
        // ev.factor();
         ev=ev||event;
         disc=ev.clientX;
        ev.preventDefault();
        //console.log(disc)
        target.style.left=-(ev.clientX)+"px";

    });
;





//插入模板
var Movie=[];
$.get("../dist/data/movie1.json",function(data){
  //循环data找到id
  var str=window.location.href; //取得整个地址栏
  var movid=str.split("?")[1];
     $.each(data,function(index,item){
        // console.log(data[index].movie_id);
          if(data[index].movie_id==movid){
            var movie=data[index];
                Movie.push(movie);
             render(Movie,"movie_info","#header-btm");
             render(Movie,"movie_intro","#sec1");
             render(movie.photos,"photos","#imgs_ul");
          }
    });

      var abc=document.getElementById("abc");
     var ms=document.getElementById("fold")
     var mspan=ms.getElementsByTagName("span")[0];
     var flag=true;
     abc.onclick=function(){
        if(flag){
          this.className='iconfont icon-xiangshang';
          mspan.style.overflow="visible";
          mspan.style.height=90+"px";
        }
        else{
            this.className='iconfont icon-xiangxia';
            mspan.style.overflow="hidden";
           mspan.style.height=60+"px";
        }
        flag=!flag;
     }
});
 function render(movie,id,content){
        var tpldata = {
            list : movie
        }
        var html = template(id, tpldata);
         console.log(html);
        $(content).append(html);
 }

