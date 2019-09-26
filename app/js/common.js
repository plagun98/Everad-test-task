window.onload = function(){
    if($(window).width() <= 1200){
        $(".mikocin-info__inner-wrapper__right").appendTo($(".for-mobile"));
    }
    if($(window).width() <= 600){
        $(".mobile-header p")[0].innerHTML = "Доставка бесплатно";
    }
}
window.onresize = function(){
    if($(window).width() <= 1200){
        $(".mikocin-info__inner-wrapper__right").appendTo($(".for-mobile"));
    } else {
        $(".mikocin-info__inner-wrapper__right").appendTo($(".mikocin-info__inner-wrapper"));
    }
    if($(window).width() <= 600){
        $(".mobile-header p")[0].innerHTML = "Доставка бесплатно";
    } else {
        $(".mobile-header p")[0].innerHTML = "Бесплатно";
    }
}