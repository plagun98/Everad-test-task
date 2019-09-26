window.onload = function(){
    if($(window).width() <= 1200){
        $(".mikocin-info__inner-wrapper__right").appendTo($(".for-mobile"));
    }
}
window.onresize = function(){
    if($(window).width() <= 1200){
        $(".mikocin-info__inner-wrapper__right").appendTo($(".for-mobile"));
    } else {
        $(".mikocin-info__inner-wrapper__right").appendTo($(".mikocin-info__inner-wrapper"));
    }
}