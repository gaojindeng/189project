var serchTip={
	index:-1,
	size:'',
	keycode:''
};
(function($) {  
    $.fn.watch = function(callback) {  
        return this.each(function() {  
            //event  
            $(this).on('keyup click', function(e) {
            	if(navigator.appName == "Microsoft Internet Explorer"){
        			serchTip.keycode=event.keyCode;
        		}else{
        			serchTip.keycode=e.which;
        		}
        		if(serchTip.keycode!=38 && serchTip.keycode!=40){
        			var currentVal = $(this).val(); 
                    if (currentVal!="") {                 
                        callback($.trim(currentVal));  
                    }else{
                    	if(!$("#serch_dialog").is(":hidden")) tipHide();
            		}
        		}
            });  
        });  
    };  
})(jQuery); 
$(function(){
	var arr = document.cookie.match(new RegExp("(^| )"+"SHOPID_COOKIEID"+"=([^;]*)(;|$)"));
	var cacheDate={};
	var shopId=(arr==null || arr.length<2) ? '10001' :arr[2];
	$("#searchtext").watch(function(value) {
		if(value.length>0){
			if(cacheDate[value]){
				  var data=cacheDate[value];
				  tipShow(data); 
				  checkSerch();
			}else{
				window.setTimeout(function(){
					$.ajax({
						type: "POST",
						url: "/dqmh/tianyiMall/keyWord.do?method=serchTip",
					   	cache: false,
					   	dataType: "json",
					 	async:true,
					 	data:{"query":window.encodeURI(value),"shopId":shopId},
					   	success:function(data){
					   		if(data!=null && data!="" ){
					   			cacheDate[value]=[];
					   			cacheDate[value]=data;//给缓存对象赋值
					   			tipShow(data);
					   			checkSerch();
					   		}else{
					   			tipHide();
					   		}
					   	}
					});
				}, 200);
			}
		}
		
	});

	$(document).keydown(function(e){
		if(navigator.appName == "Microsoft Internet Explorer"){
			serchTip.keycode=event.keyCode;
		}else{
			serchTip.keycode=e.which;
		}
		if(serchTip.keycode==38 || serchTip.keycode==40){
			if(!$("#serch_dialog").is(":hidden")){
				var tipData=$("#serch_dialog").children();
				if(tipData.length){
					if(serchTip.keycode==38){//上
						serchTip.index--;
						if(serchTip.index<0) serchTip.index=serchTip.size;
					}else if(serchTip.keycode==40){//下
						serchTip.index++;
						if((serchTip.index+1)>serchTip.size) serchTip.index=0;
					}
					var searchHtml=tipData.eq(serchTip.index).html().replace("...","");
					$("#searchtext").val(searchHtml);
					$("#serch_dialog").children().eq(serchTip.index).css("background","#ff8200").siblings().css("background","");
				}
			}
		}
	});
	$('#iframesearchtext', parent.document).mouseout(tipHide);
});
function filterChar(frontWords,endWords,str){
	var front=str.indexOf(frontWords);
	var end=str.indexOf(endWords);
	if(front>-1&&end>-1){
		subStr=str.substring(front,end+1);
		str=str.replace(subStr,'');
	}
	return str;
}
function checkSerch(){
	$("#serch_dialog li").on('click',function(){
		var searchHtml=$(this).html().replace("...","");
		$("#searchtext").val(searchHtml);
		 tipHide();
		 submitsearch();
	});
}


function tipHide(){
	$("#serch_dialog").hide();
	$('#iframesearchtext', parent.document).css("height","105");
}
function tipShow(data){
	if(data!=null && data!=""){
		$('#iframesearchtext', parent.document).css("height","300");
		serchTip.size=data.length;
		serchTip.index=-1;
		var str="";
		for(var i=0;i<data.length;i++){
			var suggest=filterChar('【','】',data[i].suggest);
			str+="<li>"+cutstr(suggest,55)+"</li>";
		}
		$("#serch_dialog").html(str).show(); 
	}
}

function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4  
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；  
    if (str_length < len) {
        return str;
    }
}




