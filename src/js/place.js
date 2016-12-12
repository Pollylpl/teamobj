/*
* @Author: Marte
* @Date:   2016-12-09 12:15:06
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-11 17:16:20
*/

'use strict';
$(function(){
    var str=window.location.href;
    //解码方法；
    var movname=(str.split("?")[1]);
    console.log(movname);

$.get("../dist/data/movie1.json",function(data){
     function render(movieplace){
        var tpldata = {
            list : movieplace
        }
        var html = template('placeall', tpldata);
        console.log(html);
        document.getElementById('content').innerHTML = html
    }
    render(data);
    for(var i=0;i<data.length;i++){
        if(data[i].movie_id==movname){
             $(".header-top").append(data[i].movie_name);
             $("#content li a").attr("href","movieshow.html?"+data[i].movie_id);
        }
    }


});











})