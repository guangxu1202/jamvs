$(function(){

    // person msg 
    $(".nav_per").hover(function(){
        $(".nav_per_h").show();
    },function(){
        $(".nav_per_h").hide();
    })

    // banner 鼠标经过
    $(".ban_list a").hover(function(){
        // alert($(this).height())
        $(this).find("img").addClass("filter100")
    },function(){
        $(this).find("img").removeClass("filter100")
    })

    $(".nav_li").hover(function(){
        $(this).addClass("nav_sb");
    },function(){
        $(this).removeClass("nav_sb");
    })

    // goods mouse hover
    $(".goods").hover(function(){
        $(this).find(".spec_filter").removeClass("hide");
        $(this).find(".spec_price").addClass("spec_write");
        $(this).find(".spec_links,.spec_linksbg").animate({height:"160px"})
        $(this).find(".spec_linksbg").css("background-color","#df006d").removeClass("filter50").addClass("filter70");
        
    },function(){
        $(this).find(".spec_filter").addClass("hide");
        $(this).find(".spec_price").removeClass("spec_write");
        $(this).find(".spec_links,.spec_linksbg").animate({height:"85px"})
        $(this).find(".spec_linksbg").css("background-color","#000").removeClass("filter70").addClass("filter50");

    })

  
})

