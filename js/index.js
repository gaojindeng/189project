	//ҳ����ʾ�����¼�
	function change(val){//��ʾ
		var ul_1 = document.getElementById(val);
		ul_1.style.display = 'block';
	}
	function restore(val){//����
		var ul_1 = document.getElementById(val);
		ul_1.style.display = 'none';
	}
	var timer;//���������Ķ�ʱ��
	var timer1;//�رմ����Ķ�ʱ��
	var ht = 0;//�����ĸ߶�
	//��洰����ʾ
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
	//����������ʱ��
	function startTimer(){
		timer = setInterval('showGg()',10);
	}
	//���ع�洰��
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
	//��ʼ���ع�洰����ʱ��
	function startHideTimer(){
		timer1 = setInterval('HideGg()',10);
	}
	//�Ѳ�Ʒ���Ѱ����л�
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
	//�������ý���span����
	function search_input(){
		var span = document.getElementById('search_span');
		span.style.display = 'none';
	}
	//�޸ĵ���
	function  choose(val){
		var value = val.innerHTML;
		var a = document.getElementById('area_span');
		a.innerHTML = value;
	}
	//�޸Ļ��ѽ��
	function  choose1(val){
		var value = val.innerHTML;
		var a = document.getElementById('jin');
		a.innerHTML = value;
	}
	//��������������ʾ
	function showBg(val){
		val.className = 'menu_c_bg menu_c_bg_1';
		
	}
	//����������������
	function hideBg(val){
		val.className='menu_c_bg';
	}
	var timer3;
	var index = 1;//ÿ��ͼƬ��id
	//����ͼƬ�ֲ���ʱ��
	function startTimer1(){
		timer3 = setInterval('startLun()',1200);
	}
	//��ʼ�ֲ�
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
	//��ֹ��ʱ��
	function stopLun(){
		clearInterval(timer3);
	}
	//������ط���ͼƬ
	function Lun(num){
		stopLun();
		index = num;
		startLun();
	}
	//����Ч��
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
//�ײ���ʾ�����л�
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
//�������/��ֵ���л�
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

//���п���ֵ/���ܳ�ֵ ��ɫ�л�
function chongzhiGl(index,val){
	var lis = document.getElementsByName(val);
	for(var i = 0; i < lis.length; i++){
		if(index == i)
			lis[i].style.color = '#ff8201';
		else
			lis[i].style.color = '#777';
	}
}
//�ֻ�/����/���/�̻� ��ʾ����
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
//������/��ֵ�������һ���
var timer10;//���ƶ�ʱ��
var timer11;//���ƶ�ʱ��
var le = 0;//�ƶ�����ֵ
//�������ƶ�ʱ��
function startLeft(){
	clearInterval(timer11);
	timer11 = setInterval('left()', 10);
}
//�������ƶ�ʱ��
function startRight(){
	clearInterval(timer10);
	timer10 = setInterval('right()', 10);
}
//�������һ���
function right(){
	var ul = document.getElementById('box_a');	//�����div�������˹�����
	var lic = document.getElementById('box_li');//��ʾ������li���ܹ���4��li
	var wid = lic.offsetWidth;					//һ��li�Ŀ����224px
	if(le<wid){ 								//��ÿ���ƶ�����С��224pxʱ
		le += 14;								//�ƶ�����ֵ+14
		ul.scrollLeft +=14;						//������ÿ���ƶ�14
		if(ul.scrollLeft == 672){ 				//���Ƶ������һ��liʱ�������ʱ��������������
			clearInterval(timer10);
			return;
		}
	}else{										//���ƶ���224pxʱ ��һ��li���أ���һ��li��ʾ����
		le = 0;									//�ƶ�����ֵ��ʼ��0
		clearInterval(timer10);					//�����ʱ��
	}
	if( ul.scrollLeft == 672){					//�Ѿ������һ��liʱ������������ʼ���㣬�����ʱ��������������
		ul.scrollLeft = 0;
		clearInterval(timer10);
		return ;
	}
}
//�������󻬶�
function left(){ //���һ���˼��һ��
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
//��ֵ���һ���
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
//��ֵ���󻬶�
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
//������ʱ��
function startPositionR1(){
	clearInterval(timer13);
	timer12 = setInterval('right1()', 10);
}
function startLeft1(){
	clearInterval(timer12);
	timer13 = setInterval('left1()', 10);
}
