$(function(){function p(a){var b=!0;$("#"+a).find("input[required]").each(function(){var a=$(this);if(""==a.val()){return alert(a.attr("placeholder")+"\u4e0d\u80fd\u4e3a\u7a7a\uff01"),b=!1}if("J_Mobile"==a.attr("id")&&!/^\d{11}$/.test(a.val())){return alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\uff01"),b=!1}});return b}function s(a){if(!e){e=!0;var b=$("#regFrame").find("input[class*='frame-input']");;$.post(APP.URL_USER,b,function(b){b.success?(APP.uid=b.uid|0,a&&a(),e=!1):alert(b.error)},"json")}}function f(){game.go("popupPage")}function q(){var a=!1;0<APP.remainAllTimes?($("#J_Get").text("\u518d\u73a9\u4e00\u6b21").attr({role:"play"}).parent().show(),a=!0):$("#J_Get").parent().hide();return a}function u(){if(!k){k=!0;var a=game.getSum()||0,a=0<APP.MAX_SUM&&a>APP.MAX_SUM?APP.MAX_SUM:a;$.post(APP.URL_GET_TICKET,{uid:APP.uid,score:a},function(a){a.success?(game.end(!1),game.showTicket(),k=!1):alert(a.error)},"json")}}
    function r(){var a=stage.getChildByName("ticketPage"),b=stage.getChildByName("rankPage"),d=game.getSum()||0;a.isVisible()?0<a.sum?(window.shareData.title="\u62a2\u94b1\u5566\uff01\u6211\u53c2\u52a0\u75af\u72c2\u5212\u7b97\u62a2\u5230\u4e86"+a.sum+"\u5143\uff01",window.shareData.desc=window.shareData.titleDefault):(window.shareData.title=window.shareData.titleDefault,window.shareData.desc=window.shareData.descDefault):b.isVisible()?(window.shareData.title=0<APP.uMax?APP.IIMEOUT+"\u79d2\u5c31\u62a2\u5230\u4e86"+APP.uMax+"\u5143\uff0c\u8f7b\u8f7b\u677e\u677e\u6324\u8fdb\u5bcc\u8c6a\u699c\u7b2c"+APP.uRank+"\u4f4d\uff0c\u4f60\u884c\u5417\uff1f":"\u5bcc\u8c6a\u699c\u7684\u9996\u5bcc\u7adf\u7136\u4e0d\u662f\u6211\uff0c\u8981\u4e0d\u4f60\u6765\u8bd5\u8bd5\uff1f",window.shareData.desc=window.shareData.descDefault):game.isIng()?(window.shareData.title="\u75af\u72c2\u8d5a\u94b1ing\uff0c\u8d76\u7d27\u52a0\u5165\u6211\u4eec\uff01",window.shareData.desc="\u6211\u5728"+APP.customer+"\u53c2\u52a0\u4e86\u75af\u72c2\u5212\u7b97\u6d3b\u52a8\uff0c\u5fc3\u52a8\u4e0d\u5982\u884c\u52a8\uff0c\u8d76\u7d27\u52a0\u5165\u6211\u4eec\uff01"):0<d?(window.shareData.title=APP.IIMEOUT+"\u79d2\u5c31\u62a2\u5230\u4e86"+d+"\u5143\uff0c\u4f60\u80fd\u8d85\u8fc7\u6211\u5417\uff1f",window.shareData.desc="\u4f5c\u4e3a\u5b87\u5b99\u65e0\u654c\u8d85\u7ea7\u9ec4\u91d1\u70b9\u949e\u624b\uff0c\u90d1\u91cd\u5411\u4f60\u53d1\u51fa\u6311\u6218\uff0c\u6562\u4e0d\u6562\u548c\u6211\u4e00\u8f83\u9ad8\u4e0b\uff01"):(window.shareData.title=window.shareData.titleDefault,window.shareData.desc=window.shareData.descDefault) }
    var t,e=!1,k=!1,l=!1,m=!1,n=!1;$.ajaxSettings.timeout=30000;$("#J_GetVerCode").click(function(){var a=$(this),b=$("#J_Mobile").val(),d=60;if(!/^\d{11}$/.test(b)){return alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\uff01"),!1}if(a.hasClass("ver-btn-wait")){return !1}a.addClass("ver-btn-wait");t=setInterval(function(){d?(a.text(d+"\u79d2\u540e\u91cd\u53d1"),d--):(clearInterval(t),a.removeClass("ver-btn-wait").text("\u83b7\u53d6\u9a8c\u8bc1\u7801"))},1000);$.post(APP.URL_VERIFY,{mobile:b},function(a){a.success||alert(a.error)},"json")});$("#J_RegClose").click(function(){f()});$("#J_Go").click(function(){p("regFrame")&&s(f)});$("#J_CancelScore").click(function(){f();APP.getScore()});$("#J_SaveScore").click(function(){p("regFrame")&&s(APP.getScore)});APP.timestamp="";APP.getScore=function(a,b){var d=game.getSum()||0,c=3,g=!0,h="";a=a||(+new Date+"").substr(3);$("#J_UserSum").text("\uffe5"+d);$.post(APP.URL_SCORE,{uid:APP.uid,score:d,_t:a,_scoreFirst:!!b},function(a){if(a.success){h="<p>\u4eba\u7c7b\u5df2\u7ecf\u65e0\u6cd5\u963b\u6b62\u4f60\u6210\u4e3a\u571f\u8c6a\u4e86\uff0c</p><p>\u8d76\u7d27\u3010\u9886\u53d6\u3011\u73b0\u91d1\u5238\uff0c\u53bb\u5927\u91d1\u5e93\u5151\u6362\u5427\uff01</p>";0<a.max_sum&&d>a.max_sum?($("#J_UserSum").text("\uffe5"+a.max_sum),h="\u54c7\u585e\uff0c\u4e5f\u592a\u5feb\u4e86\u5427\uff01\u4f60\u7684\u70b9\u949e\u901f\u5ea6\u5df2\u7ecf\u6253\u7834\u4e86\u6700\u5feb\u8bb0\u5f55\uff0c\u60a8\u6700\u591a\u53ef\u4ee5\u9886\u53d6"+a.max_sum+"\u5143\u54e6\uff0c\u8d76\u7d27\u3010\u9886\u53d6\u3011\u73b0\u91d1\u5238\uff0c\u53bb\u5927\u91d1\u5e93\u5151\u6362\u5427\uff01"):$("#J_UserSum").text("\uffe5"+d);APP.remainAllTimes=a.remainAllTimes;APP.remainDayTimes=a.remainDayTimes;APP.IIMEOUT=a.timeout;APP.customer=a.customer;APP.end=a.end;APP.MAX_SUM=a.max_sum;g=game.checkPlayable();if(!g){game.end(!1);return}0<a.max?($("#J_UserMax").text("\uffe5"+a.max),$("#J_UserRank").text(a.rank+"\u4f4d"),$("#getFrame").find(".get-score").show()):$("#getFrame").find(".get-score").hide();APP.followed?($("#J_Follow").parent().hide(),c--):$("#J_Follow").parent().show();0<a.total_remain?0<a.remain||-1==a.remain?$("#J_Get").text("\u9886\u53d6").attr({role:"get"}).parent().show():(h="<div>\u4eb2\uff0c\u60a8\u7684\u73b0\u91d1\u5238\u5df2\u7ecf\u9886\u5b8c\u4e86\uff01</div><div>\u8d76\u7d27\u73a9\u6e38\u620f\u5237\u699c\u5427\uff01</div>",q()||c--):(h="<div>\u4eb2\uff0c\u597d\u53ef\u60dc\uff01\u73b0\u91d1\u5238\u5df2\u7ecf\u88ab\u62a2\u5b8c\u4e86\uff01</div><div>\u8d76\u7d27\u73a9\u6e38\u620f\u5237\u699c\u5427\uff01</div>",q()||c--,0>=APP.uid&&(h="\u4eb2\uff0c\u60a8\u4e0d\u9700\u8981\u8bb0\u5f55\u6e38\u620f\u6210\u7ee9\u54e6~\u60f3\u8981\u9886\u53d6\u73b0\u91d1\u5238\uff0c\u8d76\u7d27\u518d\u73a9\u4e00\u6b21\u8bb0\u5f55\u6210\u7ee9\u5427\uff01"));
d<a.min_sum&&(h="<div>\u4eb2\uff0c\u8fbe\u5230"+a.min_sum+"\u5143\u624d\u80fd\u9886\u53d6\u54e6\uff01</div><div>\u8d76\u7d27\u3010\u518d\u73a9\u4e00\u6b21\u3011\uff0c\u6570\u94b1\u6570\u5230\u624b\u8f6f\uff01</div>",q()||c--);$("#getFrame").find(".get-txt").html(h);3==c?$("#J_BottomBtn").addClass("bottom-btn3"):$("#J_BottomBtn").removeClass("bottom-btn3");f();game.end(!0)}else{alert(a.error)}APP.timestamp=a._t},"json")};$("#J_GetClose").click(function(){game.end(!1)});$("#J_Follow").click(function(){game.showGuide("follow","endPage")});$("#J_Share").click(function(){game.showGuide("share","endPage")});$("#J_Get").click(function(){var a=$(this).attr("role");"get"==a?u():"play"==a&&game.end(!1)});$("#J_ExchangeNo").click(function(){game.go("exchangePage");game.go("ticketPage",!0)});$("#J_ExchangeYes").click(function(){if(p("exchangeFrame")){var a=$("#exchangeFrame").attr("data-id"),b=$("#J_SN").val();$.post(APP.URL_EXCHANGE,{uid:APP.uid,snid:a,sn:b},function(b){if(b.success){game.go("exchangePage");var c=$("#J_TicketList").children("[data-id='"+a+"']");c.find(".exchange").hide();c.find(".status").text(b.status);game.go("ticketPage",!0)}else{alert("\u5BC6\u7801\u9519\u8BEF")}},"json")}});$("#J_TipYes").click(function(){game.go("tooltipPage")});APP.showTip=function(a){$("#J_TipTitle").text(a)};APP.loadRule=function(a){n||(n=!0,$.get(APP.URL_RULE,{uid:APP.uid},function(a){a.success?(0<a.allTimes||0<a.dayTimes?(0<a.allTimes?($("#J_UsedAllTimes").text(a.usedAllTimes),$("#J_AllTimes").text(a.allTimes).parent().show()):$("#J_AllTimes").text(a.allTimes).parent().hide(),0<a.dayTimes?($("#J_UsedDayTimes").text(a.usedDayTimes),$("#J_DayTimes").text(a.dayTimes).parent().show()):$("#J_DayTimes").text(a.dayTimes).parent().hide(),$("#J_TimesDesc").show()):$("#J_TimesDesc").hide(),$("#J_GameExpires").html(a.expires),$("#J_GameRule").html(a.rule),$("#J_ExchangeDesc").html(a.exchange)):alert(a.error);$("#ruleFrame").show();n=!1},"json"))};$(".ticket-list").delegate("li","click",function(a){a=a.target;var b=$(a).attr("seed");if(b){switch(b){case"arrow":$(this).find(".detail-wrap").toggle();$(a).toggleClass("arrow-btn-on");break;case"exchange":a=$(this).attr("data-id");game.abort();game.go("ticketPage");$("#J_SN").val("");game.go("exchangePage",!0);$("#exchangeFrame").attr("data-id",a);break;case"use":(a=$(a).attr("data-url"))&&window.open(a)}}});$(".tab-wrap").scroll(function(a){a=$(this).scrollTop()+$(this).height();var b=$(this).children(".tab-inner").height();b<a||b<=a+100&&$(".tab-frame[data-role]").each(function(){var a;if("hidden"!=$(this).css("visibility")){return a=$(this).attr("data-role"),a=stage.getChildByName(a),APP.loadMore(a),!1}})});APP.loadMore=function(a,b){if(a){b=void 0==b?a.page:b;b=0<b?b:0;var d=a.name,c,g;"ticketPage"==d?(c=APP.URL_TICKET,g="ticketFrame",m?c="":m=!0):"rankPage"==d&&(c=APP.URL_RANK,g="rankFrame",l?c="":l=!0);c&&$.get(c,{uid:APP.uid,pageSize:10,page:++b},function(c){c.success?(a.reload(c),a.page=(c.result||[]).length?b:--b):alert(c.error);"ticketPage"==d?m=!1:"rankPage"==d&&(l=!1);var e=$("#"+g).find(".tab-wrap");c=$("#"+g).find(".tab-inner");var e=e.height(),f=c.height();e>f&&c.css("paddingBottom",e-f+20)},"json")}};$(document).on("ajaxError",function(a,b,d){404!=b.status&&(n=m=l=k=e=!1,alert("\u7f51\u7edc\u4e0d\u7ed9\u529b\u554a\uff0c\u8bf7\u91cd\u8bd5\u4e00\u4e0b\u3002"),-1<(d.data||"").indexOf("_scoreFirst=true")&&game.end(!1))});$(document).on("ajaxStart",function(){$("#J_Loading").show()});$(document).on("ajaxComplete",function(){$("#J_Loading").hide()});

window.shareData={titleDefault:"\u5df2\u7ecf\u6709"+APP.userCount+"\u4eba\u53c2\u52a0\u4e86\u75af\u72c2\u5212\u7b97\uff0c\u6570\u94b1\u6570\u5230\u624b\u62bd\u7b4b\uff01",descDefault:"\u6709\u94b1\u5927\u5bb6\u8d5a\uff0c\u9001\u94b1\u7684\u4e8b\u90fd\u4e0d\u544a\u8bc9\u5c0f\u4f19\u4f34\uff0c\u5408\u9002\u5417\uff1f",link:APP.SHARE_URL,imgUrl:APP.SHARE_IMG,imgWidth:300,imgHeight:300};   
var shareMeta=  {
		title:shareData.title,
		desc:shareData.desc,
		link:shareData.link,
		imgUrl:shareData.imgUrl,
	    trigger:function(){ r(); this.title = shareData.title; this.desc=shareData.desc; this.link =shareData.link; this.imgUrl = shareData.imgUrl; },
	    success:function(){ $.post(APP.SHATE_CALLBACK); }
};
 wx.ready(function(){ 
   wx.checkJsApi({
      jsApiList: [
                  'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareWeibo'
       ],
      success: function (res) {
         
      	if(res.errMsg=='checkJsApi:ok'){
     
		    wx.onMenuShareTimeline(shareMeta);
		    wx.onMenuShareAppMessage(shareMeta);
		    wx.onMenuShareWeibo(shareMeta);
	    }
	    else{
		  document.addEventListener("WeixinJSBridgeReady",function(){
			   WeixinJSBridge.on("menu:share:appmessage",function(a){
			   r();
			   WeixinJSBridge.invoke("sendAppMessage",
			   {title:shareData.title,desc:shareData.desc,link:shareData.link,img_url:shareData.imgUrl,img_width:shareData.imgWidth,img_height:shareData.imgHeight},
			   function(a){$.post(APP.SHATE_CALLBACK);_report("send_msg",a.err_msg)})});
			   WeixinJSBridge.on("menu:share:timeline",function(a){
			   r();WeixinJSBridge.invoke("shareTimeline",{title:shareData.title,desc:shareData.desc,link:shareData.link,img_url:shareData.imgUrl,img_width:shareData.imgWidth,img_height:shareData.imgHeight}
			   ,function(a){$.post(APP.SHATE_CALLBACK);_report("timeline",a.err_msg)})});
			   WeixinJSBridge.on("menu:share:weibo",function(a){
			   r();WeixinJSBridge.invoke("shareWeibo",{desc:shareData.desc,link:shareData.link},
			   function(a){$.post(APP.SHATE_CALLBACK);_report("weibo",a.err_msg)})})});	
	    }
      }
    });
    
});


   });
