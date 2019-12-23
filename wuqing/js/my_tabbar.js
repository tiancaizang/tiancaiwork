//   底部点击换颜色事件
$(".tabbar_item").click(function () {

    var that = this

    var dian_index = $(this).index()

    $(".tabbar_item").each(function (index , item)   {
        if (dian_index == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src" ,cur_src.replace(".png" , "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src" ,cur_src.replace("_a" , ""))
    
        }
    })

    
    $(".app_content>div").each(function (index , item) {
        if ($(that).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})


$(".shouye_wrap img").click(function (){
    location.href = 'shipinxiangqing.html'
})
$(".tiaotiao").click(function (){
    location.href = 'sousuo.html'
})
$(".kandan").click(function (){
    location.href = 'wodekandan.html'
})
$(".fanhui").click(function (){
    location.href = 'index.html'
})


var screen_h = window.screen.height
var screen_w = window.screen.width

$(".app_content").css({
    "height": screen_h - $(".app_tabbar").outerHeight() + "px"
})