function render(e,t,n){var i={list:e},o=template(t,i);console.log(o),$(n).append(o)}var disc=0,target=document.getElementById("imgs_ul");touch.on("#imgs_ul","touchstart",function(e){e=e||event,disc=e.clientX,e.preventDefault(),target.style.left=-e.clientX+"px"});var Movie=[];$.get("../dist/data/movie1.json",function(e){var t=window.location.href,n=t.split("?")[1];$.each(e,function(t,i){if(e[t].movie_id==n){var o=e[t];Movie.push(o),render(Movie,"movie_info","#header-btm"),render(Movie,"movie_intro","#sec1"),render(o.photos,"photos","#imgs_ul")}});var i=document.getElementById("abc"),o=document.getElementById("fold"),s=o.getElementsByTagName("span")[0],a=!0;i.onclick=function(){a?(this.className="iconfont icon-xiangshang",s.style.overflow="visible",s.style.height="90px"):(this.className="iconfont icon-xiangxia",s.style.overflow="hidden",s.style.height="60px"),a=!a}});