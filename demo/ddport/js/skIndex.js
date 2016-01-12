// JavaScript Document
$(function(){	
	/******slider*****/
	$.fn.lazyhover = function(fuc_on, de_on, de_out) {
		var self = $(this);
		var flag = 1;
		var h;
		var handle = function(elm){
			clearTimeout(h);
			if(!flag) self.removeData('timer');
			return flag ? fuc_on.apply(elm) : null;
		};
		var time_on  = de_on  || 0;
		var time_out = de_out || 500;
		var timer = function(elm){
			h && clearTimeout(h);
			h = setTimeout(function() { handle(elm);  }, flag ? time_on : time_out);
			self.data('timer', h);
		}
		self.hover(
			function(){
				flag = 1 ;
				timer(this);
			},
			function(){
				flag = 0 ;
				timer(this);
			}
		);
	}
	function HtmlSlidePlayer(config){
		this.n =0;
		this.j =0;
		this.first_show = 1;
		var _this = this;
		var t;
		var defaults = {fontsize:12,right:10,bottom:15,time:5000,autosize:0,slidearrow:false};
		this.config = $.extend(defaults,config);
		this.count = $("#mtsBanner" + " li").length;
		
		this.factory = function(){
			//元素定位
			$("#mtsBanner").css({position:"relative",zIndex:"0",overflow:"hidden", height: $("#mtsBanner" + " ul").height() + "px" });
			$("#mtsBanner").prepend("<div class='slide_control'></div>");

			$("#mtsBanner" + " ul").css({position:"relative",zIndex:"0",margin:"0",padding:"0",overflow:"hidden", width:"100%" })
			$("#mtsBanner" + " li").css({position:"absolute",top:"0",left:"0",width:"100%",height: "100%" ,overflow:"hidden"}).hide().each(function(i){
				$("#mtsBanner" + " .slide_control").append("<a>"+(i+1)+"</a>");
			});
			
			this.resetclass("#mtsBanner" + " .slide_control a",0);
			
			//第一张图片lazyload
			var img =$("#mtsBanner" + " li").first().find('img');
			if ( img.length > 0 && !!img.attr('lazyload') ){
				$.each(img,function(i){
					$(this).attr("src",$(this).attr("lazyload")).removeAttr("lazyload");
				});
			}

		
			this.slide();

			t = setInterval(this.autoplay,this.config.time);
			//force the first slide to show
			$("#mtsBanner" + " .slide_control a").eq(0).triggerHandler('mouseover');
			
			var slideContorlWidth = $(".slide_control").width();
			$(".slide_control").css({marginLeft : -slideContorlWidth/2})
		};
	//加一个上一页下一页的按钮

	

	var prev_button = $('<em class="slidearrow slidearrow_l"><</em>');
	var next_button = $('<em class="slidearrow slidearrow_r">></em>');
	$("#mtsBanner").append(prev_button).append(next_button);
	next_button.bind('click',function(){
		if(_this.n == _this.count-1){
			$("#mtsBanner" + " .slide_control a").eq(0).triggerHandler('mouseover');
		}else{
			$("#mtsBanner" + " .slide_control a").eq(_this.n+1).triggerHandler('mouseover');
		}
	});
	prev_button.bind('click',function(){
		if(_this.n == 0){

			$("#mtsBanner" + " .slide_control a").eq(_this.count-1).triggerHandler('mouseover');
		}else{
			$("#mtsBanner" + " .slide_control a").eq(_this.n-1).triggerHandler('mouseover');
		}

	});
	

	//图片渐影
	this.slide = function(){

		$("#mtsBanner" + " .slide_control a").lazyhover(function(){
			_this.j = $(this).text() - 1;
			_this.n = _this.j;
			if (_this.j >= _this.count){return;}

			//防止闪一下
			if(_this.first_show) {
				_this.first_show = 0;
				$("#mtsBanner" + " li:eq(" + _this.j + ")").show().siblings("li").hide();
			}else {
				var li =$("#mtsBanner" + " li:eq(" + _this.j + ")");
				var next_li ;
				if ( _this.count >= _this.j + 1 ){
					next_li = $("#mtsBanner" + " li:eq(" + (_this.j+1) + ")");
				}
				
				li.fadeIn("200").siblings("li").fadeOut("200");
				//添加图片延迟加载
				var img=$("img[lazyload]",li);
				$.each(img,function(i){
					$(this).attr("src",$(this).attr("lazyload")).removeAttr("lazyload");
				});
				//背景图延迟加载
				var bg_src = li.attr("lazyload");
				if(bg_src!=undefined){
					li.css('background-image','url('+bg_src+')').removeAttr("lazyload");
					
					if ( next_li != undefined && next_li.length >= 1 ){
						var next_bg_src = next_li.attr("lazyload");
						if ( next_bg_src != undefined ){
							next_li.css('background-image','url('+next_bg_src+')').removeAttr("lazyload");
						}
						
					}

					
				}

			};
			_this.resetclass("#mtsBanner" + " .slide_control a",_this.j);
		},200,500);
	};

	//滑过停止
	$("#mtsBanner").mouseover(function(){
		clearInterval(t);
	});
	
	$("#mtsBanner").mouseout(function(){
		t = setInterval(_this.autoplay,_this.config.time)
	});


	//自动播放
	this.autoplay = function(){
		_this.n = _this.n >= (_this.count - 1) ? 0 : ++_this.n;
		$("#mtsBanner" + " .slide_control a").eq(_this.n).triggerHandler('mouseover');
	}
	//翻页函数
	this.resetclass =function(obj,i){
		$(obj).removeClass('mall_dot_hover').addClass('mall_dot');
		$(obj).eq(i).addClass('mall_dot_hover');
		if(!window.XMLHttpRequest){
			$('.img_slider_trigger').css("zoom","1");
		}
	};
	this.factory();
}
	HtmlSlidePlayer({autosize:0,fontsize:12,time:4000});
	
	

	$(".silderBar ul li").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	})



})
