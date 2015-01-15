$(function(){

    // 新品牌入驻效果
    $(".single_point span").click(function(){
        Single.clearVal();
        Single.slideIn($(this).index());
        Single.idx = $(this).index();
        Single.auto();
    })
    $(".single_box li").hover(function(){
        Single.clearVal();
    },function(){
        Single.auto();
    })
})

// 图片切换
// 基于jquery框架
var Single = {
    config : {
        times :3000,
        // 外层选择器
        box : ".single",
        // 切换场景外层选择器
        changebox : "single_box",
        // 切换场景内层选择器
        changeboxInner :"li",
        // 切换场景class
        changeClass : "slideIn",
        // 焦点外层选择器
        focusbox : "single_point",
        // 焦点内层选择器
        focusboxInner : "span",
        // 焦点选中class
        focusClass :"focus"
    },
    loading : function(){
        if (Single.len() >0) {
            $(Single.config.box).append("<div class='"+Single.config.focusbox+"'></div>");
            for (var i = 0; i < Single.len(); i++) {
                $("."+Single.config.focusbox).append("<"+Single.config.focusboxInner+"></"+Single.config.focusboxInner+">");
            };
            $("."+Single.config.focusbox+" "+Single.config.focusboxInner).eq(0).addClass(Single.config.focusClass);
            Single.auto();
        };
    },
    auto :function(){
        Single.slideIn(Single.idx);
        t = setInterval(function(){
            Single.idx ++;
            if (Single.idx > Single.len()-1) {
                Single.idx = 0;
            };
            Single.slideIn(Single.idx);
        },Single.config.times);
    },
    clearVal :function(){
        clearInterval(t);
    },
    len:function(){
        return $("."+Single.config.changebox+" "+Single.config.changeboxInner).size();
    },
    slideIn:function(n){
        $("."+Single.config.changebox+" "+Single.config.changeboxInner).removeClass(Single.config.changeClass).eq(n).addClass(Single.config.changeClass);
        $("."+Single.config.focusbox+" "+Single.config.focusboxInner).removeClass(Single.config.focusClass).eq(n).addClass(Single.config.focusClass);
    },
    idx:0
}