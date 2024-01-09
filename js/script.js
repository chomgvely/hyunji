$(window).scroll(function(){
	let scrTop=$('html').scrollTop()
	if (scrTop > 50) {
		$('.header').addClass('fixed')
	} else{
		$('.header').removeClass('fixed')
	}
}) //window.scroll end

/*m_menu script*/

$('.m_sub').hide()
$('.m_menu>li').click(function(){
	$(this).toggleClass('active');
	$(this).siblings().removeClass('active');
	$(this).children('.m_sub').slideToggle();
	$(this).siblings().children('.m_sub').slideUp();
})

$('.m_container').hide();

$('.m_nav').css({'margin-right':'-350px'})

$('.m_close').click(function(){
	$('.m_container').fadeOut();
	$('.m_nav').animate({'marginRight':'-350px'},500)
})

$('.m_btn').click(function(){
	$('.m_container').fadeIn();
	$('.m_nav').animate({'marginRight':'0px'},500)
})

$('.sub,.sub_bg').hide();
$('.menu>li').mouseover(function(){
	$('.sub,.sub_bg').stop().show();
})
$('.menu').mouseout(function(){
	$('.sub,.sub_bg').stop().hide();
})

const main=new Swiper('.main',{
	navigator: {
		nextE1: '.main_next',
		prevE1: '.main_prev',
	},
	loop:true,
	autoplay:{
		delay: 2500, //지연시간
		disableOnInteraction: false,
		},
	pagination:{el:'.main .swiper-pagination', clickable:true},
})//main안에 있는 swiper-pagination을 가르키며 동그라미 형태로 나타남

$('.play').hide();
$('.pause').click(function(){
	$('.pause').hide();
	$('.play').show();
	main.autoplay.pause();
})

$('.play').click(function(){
	$('.play').hide();
	$('.pause').show();
	main.autoplay.start();
})


/*box1 slide*/
const box1=new Swiper('.box1',{
			loop:true,
			autoplay:{
			delay:3000,
			disableOnInteraction: false,
		},
      pagination: {
        el: ".box1 .swiper-pagination",
        type: "fraction",
      },
			navigation:{
				prevEl:'.box1prev', nextEl:'.box1next'
			}
})


$('.box1play').hide();
$('.box1pause').click(function(){
	$('.box1pause').hide();
	$('.box1play').show();
	box1.autoplay.pause();
})

$('.box1play').click(function(){
	$('.box1play').hide();
	$('.box1pause').show();
	box1.autoplay.start();
})


$('.notice2').hide();
$('.tab_title>li:nth-child(2)').click(function(){
	$(this).addClass('tab_active');
	$(this).siblings().removeClass('tab_active');
	$('.notice1').hide();
	$('.notice2').show();
})

$('.tab_title>li:nth-child(1)').click(function(){
	$(this).addClass('tab_active');
	$(this).siblings().removeClass('tab_active');
	$('.notice2').hide();
	$('.notice1').show();
})

$('.site_list').hide();
$('.family_site>li').mouseover(function(){
	$(this).children('.site_list').stop().show();
})

$('.family_site>li').mouseout(function(){
	$(this).children('.site_list').stop().hide();
})