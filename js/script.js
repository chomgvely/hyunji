$('.btns>li').click(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');

	/*필터기능*/
	let i=$(this).attr('data-filter');
	$('.content').isotope({filter:i})
})

const grid=new Isotope('.content',{
	itemSelecter:'.conbox',
	columWidth:'.conbox',
	transition:'0.5s'
})

setTimeout(function(){
	$('.content').Isotope('layout')},100);

$('.fancybox').fancybox();

