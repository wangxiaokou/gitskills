$(function(){
	$('.shop_all_svice').add('.shop_all_spa').bind('click',function(e){
		e.stopPropagation();
		if($(this).parent().hasClass('shop_service_nav1')){
			$(this).parent().removeClass('shop_service_nav1');
			//ajax请求处
		}else{
			$(this).parent().addClass('shop_service_nav1').removeClass('shop_service_nav2').removeClass('shop_service_nav3');
			//ajax请求处
		}
	});
	$('.shop_all_genre').add('.shop_all_trade').bind('click',function(e){
		e.stopPropagation();
		if($(this).parent().hasClass('shop_service_nav2')){
			$(this).parent().removeClass('shop_service_nav2');
			//ajax请求处
		}else{
			$(this).parent().addClass('shop_service_nav2').removeClass('shop_service_nav1').removeClass('shop_service_nav3');
			//ajax请求处
		}
	});
	$('.shop_all_sort').bind('click',function(e){
		e.stopPropagation();
		if($(this).parent().hasClass('shop_service_nav3')){
			$(this).parent().removeClass('shop_service_nav3');
			//ajax请求处
		}else{
			$(this).parent().addClass('shop_service_nav3').removeClass('shop_service_nav1').removeClass('shop_service_nav2');
			//ajax请求处
		}
	});
	$('.shop_service_nav').find('ul').bind('click',function(e){
		e.stopPropagation();
	});
	$('.shop_service_nav').find('li').add('.shop_service_nav .list a').bind('click',function(e){
		$('.shop_service_nav').removeClass('shop_service_nav1').removeClass('shop_service_nav2').removeClass('shop_service_nav3');
	});
	$('body').bind('click',function(){
		$('.shop_service_nav,.shop_spa_nav').removeClass('shop_service_nav1').removeClass('shop_service_nav2').removeClass('shop_service_nav3');
	});
	$('#orderNav').find('.nav_content').bind('click',function(){
		var index = $(this).index();
		if(index == '0'){
			$('#orderNav').attr('class','nav_state_all cf');
			//ajax请求处
		}else if(index == '1'){
			$('#orderNav').attr('class','nav_state_finish cf');
			//ajax请求处
		}else if(index == '2'){
			$('#orderNav').attr('class','nav_state_no_f cf');
			//ajax请求处
		}
	});
	$('#shopDetailNav').find('.detail_nav').bind('click',function(){
		$(this).addClass('current').siblings().removeClass('current');
	});
	$('.radio_box').bind('click',function(){
		if($(this).find('.radio').hasClass('current')){
			$(this).find('.radio').removeClass('current');
		}else{
			$(this).find('.radio').addClass('current');
			$('#sendBtnBox').show();
		}
		
	});
	$('.right_box').bind('click',function(){
		if($(this).find('.right_current').length){
			$(this).find('.right_current').attr('class','right');
		}else{
			$(this).find('.right').attr('class','right_current');
			$('#sendBtnBox').show();
			$('#doorPriceBox').show();
		}
		
	});
})