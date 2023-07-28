window.onload = function(){
	//返回顶部的隐藏和显示效果
	var oTop=document.getElementById('top');
	document.onscroll=function(){
		var top=document.documentElement.scrollTop;
		if(top==0){
			oTop.style.display='none';
		}else if(top>500){
			oTop.style.display='block';
			oTop.style.position='fixed';
		}else{
			oTop.style.position='static';
		}
	}
	//动画滑动返回顶部
	$('#top').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 1000);
	});
	
//	$('#boxtu').hover(function(){
//		$('.dtu').addClass('animated swing')
//	})
	
	
	
}