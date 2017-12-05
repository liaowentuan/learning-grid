(function($){
	function createTips(){
        $("body").append("<div class=\"LstModal\"><div id=\"tipsBox\"><div class=\"alertBody\"></div></div></div>");
    }
	$.extend({
		LstTips:function(msg){
            setTimeout(function(){
                createTips();
                if(!msg){
                    $.closeTips();
                    $(".alertBody").text("请开发人员检查语法")
                }else{
                    $(".alertBody").text(msg)
                }
            },20);
            setTimeout(function(){
            	$.closeTips();
            },2000);
        },
        closeTips:function(){
        	$(".LstModal").remove();
        },
        LstDialog:function (elm,width=800) {
            let elmen = $(elm);
            elmen[0].onclick = function(){
                event.stopPropagation();  //阻止冒泡
            };
            elmen.attr("dialog","true");
            elmen.wrapAll("<div class=\"Lst_dialog_wrap\" dialog-toggle></div>");
            elmen.css({background:"#fff",margin:"15px auto",borderRadius:"5px"});
            elmen.css("width",width + 'px');
            $('[dialog-toggle]').on("click",function(){
                event.stopPropagation();  //阻止冒泡
                $.hiddenDialog();
            });
        },
        hiddenDialog:function(){
            let div;
            if($(".dialog-warp-contact").length !=0){
                div = $(".dialog-warp-contact");
            }else{
                div = $('<div class="dialog-warp-contact"></div>');
            }
            $('.Lst_dialog_wrap > div').attr("dialog","false");
            div[0].innerHTML = $('.Lst_dialog_wrap')[0].innerHTML;
            $('.Lst_dialog_wrap').replaceWith(div);
        }
	})
})(jQuery);
setTimeout(function(){
    $.LstTips('你刷新了页面')
},500);