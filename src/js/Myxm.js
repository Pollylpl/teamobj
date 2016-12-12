

function changeBg(){
    var bg=document.getElementById("bg");
    var rand=Math.round(Math.random()*1000000);
    bg.style.backgroundColor="#"+rand;
}
setInterval("changeBg();",3000);




