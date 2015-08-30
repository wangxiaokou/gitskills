if($('.swiper-container').length){
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: '.swiper-pagination',
	    touchRatio : 0.5,
	    autoplay: 3000,
	    loop : true,
	    autoplayDisableOnInteraction : false,
	    spaceBetween: 30
	});
}
$(function(){
	$('#loginNav').find('.login_nav').bind('click',function(){
		var index = $(this).index();
		if(index == 0){
			 $(this).addClass('current').siblings().removeClass('current');
			 $('.shop_phonecommon').show();
			 $('.shop_logincommon').hide();
		}else if(index == 1){
			 $(this).addClass('current').siblings().removeClass('current');
			 $('.shop_logincommon').show();
			 $('.shop_phonecommon').hide();
		}
	});
	$('#checkCode').bind('click',function(){
		var _this = $(this);
		if($(this).hasClass('unable')){
			return;
		}
		var countNum = 60;
		var countDown = setInterval(function(){
			if(countNum){
				_this.addClass('unable').text('('+(--countNum)+')重新获取');
			}else{
				_this.removeClass('unable').text('获取验证码');
				clearInterval(countDown);
			}
		},1000);
	});
	$('#shopPhoneCommon').find('input').bind('input',function(){
		var inputs = $('#shopPhoneCommon').find('input'),
			bool = true;
		for (var i = 0,length = inputs.length; i < length; i++) {
			if($(inputs[i]).val() == ''){
				bool = false;
			}
		};
		if(bool){
			$('.phone_btn').removeClass('unable');
		}else{
			$('.phone_btn').addClass('unable');
		}
	});
	$('.eval_star_box').find('span').bind('click',function(){
		var index = $(this).index();
		var spans = $(this).parent().find('span');
		for (var i = 0; i <= index; i++) {
			$(spans[i]).attr('class','ready_star');
		};
		for (var i = index+1; i < 6; i++) {
			$(spans[i]).attr('class','star');
		};
	});
	$('#technAssessNav').find('.nav_content').bind('click',function(){
		var index = $(this).index();
		if(index == '0'){
			$('#technAssessNav').attr('class','nav_state_all cf');
		}else if(index == '1'){
			$('#technAssessNav').attr('class','nav_state_no_f cf');
		}
	})
})