/**
 * Created by 军秋 on 2017/4/30.
 */
//给+6
    $('#tabs').children().children().click( function(e){
		e.preventDefault();
		$('.clicked').removeClass('clicked');
        $(this).addClass('clicked');
        var ID = $(this).attr("href");
        $(".show").removeClass("show").addClass("hide");
		$(ID).removeClass("hide").addClass("show");
    });

$('.lists').children().mouseenter(function(){
    $(this).children(".cover01").animate({
        bottom:"-100px",
    },500);
});
$('.lists').children().mouseleave(function(){
    $(this).children(".cover01").animate({
        bottom:"0",
    },500);
});
$('.lists').children().mouseenter(function(){
    $(this).children(".cover02").animate({
        opacity:"0.8",
    },500);
});
$('.lists').children().mouseleave(function(){
    $(this).children(".cover02").animate({
        opacity:"0",
    },500);
});

//装修报价模态框

$('#tab_list').children().click( function(e){
    e.preventDefault();
    $(this).siblings().attr("style","color:#000;background-color:#ddd");
    $(this).attr("style","color:#ED6C00;background-color:#fff");
    var BQ = $(this).attr("href");
    console.log(BQ);
    BQ = "#" + BQ;
    $("#f02 .show").removeClass("show").addClass("hide");
    $(BQ).removeClass("hide").addClass("show");
    console.log(BQ);
});
//模态框的弹出设置

$('#right-fix').children().click(function(e){
    e.preventDefault();
    var ID = $(this).attr("href");
    ID = "#" + ID;
    $(ID).removeClass('hide').addClass('show');
});

//模态框关闭按钮
$('#f01 a').click(function(e){
    e.preventDefault();
    $("#f01").removeClass('show').addClass('hide');
});

$('#f02 .STOP').click(function(){
    $('#f02').removeClass('show').addClass('hide');
});














