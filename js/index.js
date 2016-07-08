	//页面显示隐藏事件
	function change(val){//显示
		var ul_1 = document.getElementById(val);
		ul_1.style.display = 'block';
	}
	function restore(val){//隐藏
		var ul_1 = document.getElementById(val);
		ul_1.style.display = 'none';
	}
	var timer;//开启窗帘的定时器
	var timer1;//关闭窗帘的定时器
	var ht = 0;//窗帘的高度
	//广告窗帘显示
	function showGg(){
		var gg = document.getElementById('gg_1');
		var close = document.getElementById('closeDiv');
		if(ht<=65){
			ht++;
			gg.style.height = ht;
		}else{
			close.style.display = 'block';
			clearInterval(timer);
		}
	}
	//开启窗帘定时器
	function startTimer(){
		timer = setInterval('showGg()',10);
	}
	//隐藏广告窗帘
	function HideGg(){
		var gg = document.getElementById('gg_1');
		var close = document.getElementById('closeDiv');
		close.style.display = 'none';
		if(ht>0){
			ht--;
			gg.style.height = ht;
		}else{
			
			clearInterval(timer1);
		}
	}
	//开始隐藏广告窗帘定时器
	function startHideTimer(){
		timer1 = setInterval('HideGg()',10);
	}
	//搜产品和搜帮助切换
	function changeBg(val,val1){
		val.className = 'search_ul_li';
		var val2 = document.getElementById(val1);
		var span = document.getElementById('search_span');
		val2.className='';
		if(val1 == 'li_2')
			span.style.display = 'block';
		else
			span.style.display = 'none';
	}
	//搜索框获得焦点span隐藏
	function search_input(){
		var span = document.getElementById('search_span');
		span.style.display = 'none';
	}
	//修改地区
	function  choose(val){
		var value = val.innerHTML;
		var a = document.getElementById('area_span');
		a.innerHTML = value;
	}
	//修改话费金额
	function  choose1(val){
		var value = val.innerHTML;
		var a = document.getElementById('jin');
		a.innerHTML = value;
	}
	//主导航栏背景显示
	function showBg(val){
		val.className = 'menu_c_bg menu_c_bg_1';
		
	}
	//主导航栏背景隐藏
	function hideBg(val){
		val.className='menu_c_bg';
	}
	var timer3;
	var index = 1;//每个图片的id
	//开启图片轮播定时器
	function startTimer1(){
		timer3 = setInterval('startLun()',1200);
	}
	//开始轮播
	function startLun(){
		var bg = document.getElementById('bg_a');
		var sel = document.getElementsByName('bg_o');
		for(var i = 0; i <sel.length; i++){
			if((i+1) == index)
				sel[i].className = 'bg_a1';
			else
				sel[i].className = 'bg_a';
		}
		bg.className = 'a'+index;
		index++;
		if(index == 8)
			index = 1;
	}
	//中止定时器
	function stopLun(){
		clearInterval(timer3);
	}
	//鼠标点击地方的图片
	function Lun(num){
		stopLun();
		index = num;
		startLun();
	}
	//鱼眼效果
	$(document).ready(
	function()
	{																																									
		$("#dock").Fisheye({
			maxWidth:70,
			items:"a",
			itemsText:"span",
			container:".dock_container",
			itemWidth:90,
			proximity:70,
			alignment:"left",
			valign:"bottom",
			halign:"center"
		});    		
	}
);
//底部显示隐藏切换
function secBoard(index){
	var dv1 = document.getElementsByName('lx');
	var dv2 = document.getElementsByName('lx1');
	
	for(var i = 0; i < 2; i++){
		if(index == i){
			dv1[i].display = 'block';
			dv2[i].style.display = 'block';
			dv1[i].className = 'li01';
		}else{
			dv1[i].display = 'none';
			dv2[i].style.display = 'none';
			dv1[i].className = '';
		}
	}
}
//欢享服务/超值购切换
function changeCo(index){
	var lis = document.getElementsByName('tp_li');
	var dvs = document.getElementsByName('tab_d');
	for(var i = 0; i < 2; i++){
		if(index == i){
			lis[i].className = 'top_li_' + (index+1) + index;
			dvs[i].style.display = 'block';
		}else{
			lis[i].className = 'top_li_' + (index+2) + index;
			dvs[i].style.display = 'none';
		}
	}
}

//银行卡充值/卡密充值 颜色切换
function chongzhiGl(index,val){
	var lis = document.getElementsByName(val);
	for(var i = 0; i < lis.length; i++){
		if(index == i)
			lis[i].style.color = '#ff8201';
		else
			lis[i].style.color = '#777';
	}
}
//手机/流量/宽带/固话 显示隐藏
function show_B(index){
	var hf = document.getElementsByName('hf');
	var hfs = document.getElementsByName('huafei');
	for(var i = 0;i < 4; i++){
		if(index == i){
			hf[i].style.color = '#ff8201';
			hfs[i].style.display = 'block';
		}else{
			hf[i].style.color = '#777';
			hfs[i].style.display = 'none';
		}
	}
}
//欢乐享福/超值购，左右滑动
var timer10;//右移定时器
var timer11;//左移定时器
var le = 0;//移动的数值
//启动左移定时器
function startLeft(){
	clearInterval(timer11);
	timer11 = setInterval('left()', 10);
}
//启动右移定时器
function startRight(){
	clearInterval(timer10);
	timer10 = setInterval('right()', 10);
}
//欢乐享福右滑动
function right(){
	var ul = document.getElementById('box_a');	//里面的div，隐藏了滚动条
	var lic = document.getElementById('box_li');//显示出来的li，总共有4个li
	var wid = lic.offsetWidth;					//一个li的宽度是224px
	if(le<wid){ 								//当每次移动距离小于224px时
		le += 14;								//移动的数值+14
		ul.scrollLeft +=14;						//滚动条每次移动14
		if(ul.scrollLeft == 672){ 				//当移到了最后一个li时，清除定时器，函数结束。
			clearInterval(timer10);
			return;
		}
	}else{										//当移动到224px时 上一个li隐藏，下一个li显示出来
		le = 0;									//移动的数值初始化0
		clearInterval(timer10);					//清除定时器
	}
	if( ul.scrollLeft == 672){					//已经是最后一个li时，将滚动条初始化零，清除定时器，函数结束。
		ul.scrollLeft = 0;
		clearInterval(timer10);
		return ;
	}
}
//欢乐享福左滑动
function left(){ //与右滑动思想一样
	var ul = document.getElementById('box_a');
	var lic = document.getElementById('box_li');
	var wid = lic.offsetWidth;
	
	if(le<wid){
		le += 14;
		ul.scrollLeft -= 14;
		
	}else{
		le = 0;
		clearInterval(timer11);
	}
	if(ul.scrollLeft == 0){
		ul.scrollLeft = 672;
		clearInterval(timer11);
		return ;
	}
}
var timer12;
var timer13;
//超值购右滑动
function right1(){
	var ul = document.getElementById('box_a2');
	var lic = document.getElementById('box_li2');
	var wid = lic.offsetWidth;
	if(le<wid){
		le += 14;
		ul.scrollLeft +=14;
	}else{
		le = 0;
		clearInterval(timer12);
	}
	
	
}
//超值购左滑动
function left1(){
	var ul = document.getElementById('box_a2');
	var lic = document.getElementById('box_li2');
	var wid = lic.offsetWidth;
	if(le<wid){
		le += 14;
		ul.scrollLeft -= 14;
		
	}else{
		le = 0;
		clearInterval(timer13);
	}
	
}
//启动定时器
function startPositionR1(){
	clearInterval(timer13);
	timer12 = setInterval('right1()', 10);
}
function startLeft1(){
	clearInterval(timer12);
	timer13 = setInterval('left1()', 10);
}
