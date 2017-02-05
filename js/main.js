$(window).scroll(function () {
    var $header=$("header");
    var $nav1=$(".nav-1");
    var $nav2=$(".nav-2");
    var $scrollTop=$(document).scrollTop();
    if($scrollTop > 10){
        $header.addClass('hidden');
        $nav2.addClass('hidden');
    } else{
        $header.removeClass('hidden');
        $nav2.removeClass('hidden');
    }
});

