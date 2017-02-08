//拖动滚动条改变header样式
function navbarStyle() {
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
    };
}
//图片占位符及预览
//占位符在模板中写出
//todo：js生成占位符内容
function imgPreview() {
    var $li=$("div.heroes-container-show-list li");
    var $preview=$(".preview-icon");
    var $previewText=$(".preview-text");
    var $previewTitle=$("div.heroes-container-show-preview h2 i");
    $li.hover(function () {
        var dataImg=$(this).attr("data-img");
        var preTxt=$(this).attr("title");
        var preTitle=$(this).attr("discription");
        $preview.css({"background":"url('img/"+dataImg+".png') no-repeat",
        "background-size":"contain",
        "height":"500px",
        "transition":"all 0.5s ease-in-out"});

        $previewText.text(preTxt);
        $previewTitle.text(preTitle);
    })
}
$(function(){
    imgPreview();
})
$(window).scroll(function () {
    navbarStyle()
});