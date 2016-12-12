/*
* @Author: Marte
* @Date:   2016-12-11 15:11:09
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-11 16:37:52
*/

'use strict';
$(function(){
    var str=window.location.href;
    //解码方法；
    var movname=(str.split("?")[1]);
    console.log(movname);
    $.get("../dist/data/movie1.json",function(data){
        for(var i=0;i<data.length;i++){
            if(data[i].movie_id==movname){
               $(".header-top").append(data[i].movie_name);
               var html="<div class=\"show-btm\">"+
                        "<p>"+data[i].movie_name+"<span>"+data[i].movie_score+"分</span></p>"+
                         "<i class=\"right\">></i>"+
                          "<em>片长："+data[i].movie_time+"分钟</em>"+
                       "</div>";
               $(".show").append(html);
               var html1=data[i].branch+"星美国际影城<span>"+data[i].movie_score+"分</span>";
               $(".row p").append(html1);
               $(".row2 span").eq(0).append(data[i].branch_info);
               var href="select.html?"+data[i].movie_id;
                $(".row4 li a").attr("href","select.html?"+data[i].movie_id);
            }
        }
    });







});