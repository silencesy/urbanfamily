$(function(){
    // 侧边 tab切换
    $(".sideTab a").off("click").on("click",function(){
       var index = $(this).index();
       $(this).addClass("sideBtn").siblings().removeClass("sideBtn");
       $(".sideContent .content").eq(index).addClass("sideActive").siblings().removeClass("sideActive");
    });

    // 日期
    var picker = new Pikaday({
        field: document.getElementById('event-dateline'),
        firstDay: 1,
        minDate: new Date('2010-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });

});