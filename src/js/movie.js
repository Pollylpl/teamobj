$(function(){
    $.get("../dist/data/movie1.json",function(data){
        function render ( moviedata ) {

            var tpldata = {
                list : moviedata
            }
            var html = template('movietpl', tpldata);
            document.getElementById('content1').innerHTML = html;

        }
        render(data);


});


//电影详情Tab切换

    $.each($(".tab>li"),function(index, el) {
        $(this).click(function(event) {
             $.get("../dist/data/movie2.json",function(data){
                function render ( moviedata ) {//moviedata黄色的是形参
                    var tpldata = {
                        list : moviedata
                    }
                    //console.log(tpldata)
                    var html = template('movietpl', tpldata);
                    //console.log(document.getElementById('content2'));
                    document.getElementById('content2').innerHTML = html;

                }
                render(data);//data是实参，data和moviedata是一个东西
            })
            var a = $(this).index();
            $(this).addClass('mvpaly').siblings().removeClass('mvpaly');
            $("section>div>ul").eq(a).css({display:'block'}).siblings().css({display:'none'});
            return false;

        });

    });
})

