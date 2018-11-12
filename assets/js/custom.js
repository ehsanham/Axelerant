window.jQuery = window.$ = jQuery;
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",2000);
    
    //wow.js on scroll animations initialization
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 50
		}
	);
	wow.init();


	
	
	$(function(){
		$('.headerBlock').data('size','big');
	});
	
	$(window).scroll(function(){
		if($(document).scrollTop() > 0)
		{
			if($('.headerBlock').data('size') == 'big')
			{
				$('.headerBlock').data('size','small');
				$('.headerBlock').stop().animate({
					height:'50px'
				},600);
				$('.headerBlock__logo').stop().animate({
					width:'100px',
					'margin-top':'0.5%'
				},600);
				$('.headerBlock__menu').stop().animate({
					'margin-top':'20px'
				},600);
				$('.headerBlock__getin').stop().animate({
					'margin-top':'1%'
				},600);
				

			}
		}
		else
		{
			if($('.headerBlock').data('size') == 'small')
			{
				$('.headerBlock').data('size','big');
				$('.headerBlock').stop().animate({
					height:'80px'
				},600);
				$('.headerBlock__logo').stop().animate({
					width:'150px',
					'margin-top':'2%'
				},600);
				$('.headerBlock__menu').stop().animate({
					'margin-top':'2%'
				},600);
				$('.headerBlock__getin').stop().animate({
					'margin-top':'1.5%'
				},600);

			}  
		}
	});

	

});