$(function(){
    // 侧边 tab切换
    $(".sideTab a").off("click").on("click",function(){
       var index = $(this).index();
       $(this).addClass("sideBtn").siblings().removeClass("sideBtn");
       $(".sideContent .content").eq(index).addClass("sideActive").siblings().removeClass("sideActive");
    });

});