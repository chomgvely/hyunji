//AOS
AOS.init();

//sub_gnb
$('.sub_gnb, .sub_gnb_bg').hide();
$('.gnb>li').mouseenter(function(){
  $('.sub_gnb_bg').stop().slideDown();
  $(this).children('.sub_gnb').stop().fadeIn();
});
$('.gnb>li').mouseleave(function(){
  $('.sub_gnb_bg').stop().slideUp();
  $(this).children('.sub_gnb').stop().fadeOut();
});

//m_gnb
$('.m_sub').hide();
$('.m_gnb>li').click(function(){
  $(this).children('.m_sub').stop().slideToggle();
  $(this).siblings().children('.m_sub').stop().slideUp();
  $(this).toggleClass('m_gnb_active');
  $(this).siblings().removeClass('m_gnb_active');
});

//m_menu
$('.m_bg').hide();
$('.close_btn').click(function(){
  $('.m_bg').hide();
});
$('.m_menu').click(function(){
  $('.m_bg').show();
});

//main swiper
let mainSwiper = new Swiper('.main .swiper-container',{
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  speed: 1000,
  loop: true,
  navigation:{
    prevEl:'.main .swiper-button-prev',
    nextEl:'.main .swiper-button-next',
  },
  pagination:{
    el: '.main .swiper-pagination',
    type: 'fraction',//숫자로 표기
  },
});

//main_navi play-pause
$('.main .play_btn').hide();
$('.main .pause_btn').click(function(){
  $('.main .play_btn').show();
  $('.main .pause_btn').hide();
  mainSwiper.autoplay.stop();
});
$('.main .play_btn').click(function(){
  $('.main .play_btn').hide();
  $('.main .pause_btn').show();
  mainSwiper.autoplay.start();
});

//s2_wrap > swiper1
let swiper1 = new Swiper('.s2 .swiper1',{
  effect: 'fade',
  autoplay: {
    delay:4000,
    disableOnInteraction:false,
  },
  loop:true,
  pagination:{
    el:'.s2 .swiper-pagination',
    type: 'fraction',
  },
  navigation:{
    prevEl:'.s2 .swiper-button-prev',
    nextEl:'.s2 .swiper-button-next',
  },
  loopedSlides : 3,
  touchRatio:0, //swiper의 드래그 기능 막기
});

//s2_wrap > swiper2
let swiper2 = new Swiper('.s2 .swiper2', {
  autoplay:{
    delay:4000,
    disableOnInteraction: false,
  },
  loop:true,
  pagination:{
    el:'.s2 .swiper-pagination',
    type: 'fraction',
  },
  navigation:{
    prevEl:'.s2 .swiper-button-prev',
    nextEl:'.s2 .swiper-button-next',
  },
  slidesPerView: 'auto',
  spaceBetween: 60,

  loopedSlides : 3,
});

//s2swiper conact
//swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;


$('.s2 .play_btn').hide();
$('.s2 .pause_btn').click(function(){
  $('.s2 .pause_btn').hide();
  $('.s2 .play_btn').show();
  swiper1.autoplay.stop();
  swiper2.autoplay.stop();
});

$('.s2 .play_btn').click(function(){
  $('.s2 .play_btn').hide();
  $('.s2 .pause_btn').show();
  swiper1.autoplay.start();
  swiper2.autoplay.start();
});


//s3swiper
let s3Swiper = new Swiper('.s3 .swiper-container', {
  autoplay:{
    delay:4000,
    disableOnInteraction:false,
  },
  loop : true,
  navigation : {
    prevEl: '.s3_left .swiper-button-prev',
    nextEl: '.s3_left .swiper-button-next',
  },
  breakpoints:{
    840 : {slidesPerView: 2, spaceBetween: 30,},
    1000 : {slidesPerView: 1,}, 
  },
});

$('.s3_left .play_btn').hide();
$('.s3_left .pause_btn').click(function(){
  $('.s3_left .pause_btn').hide();
  $('.s3_left .play_btn').show();
  s3Swiper.autoplay.stop();
});
$('.s3_left .play_btn').click(function(){
  $('.s3_left .play_btn').hide();
  $('.s3_left .pause_btn').show();
  s3Swiper.autoplay.start();
});

//family
$('.f_list').hide();
$('.family').click(function(){
  $('.f_list').stop().slideToggle();
});