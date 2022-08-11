// badge & btn_top 버튼 기능 구현

$(window).on('scroll', _.throttle(function(){
  if (window.scrollY > 400) {
    //배지 숨기기
    gsap.to('.badge', .6, {
      opacity: 0,
      display: 'none'
    });

    //상단이동버튼 보이기
    gsap.to('#btn-top', .4, {
      x: 0,
      opacity: 1,
      'z-index': 1
    })

  } else {
    //배지보이기
    gsap.to('.badge', .6, {
      opacity: 1,
      display : 'block'
    })

    //상단이동버튼 숨기기
    gsap.to('#btn-top', .4, {
      x: 200
    })
    
  };
}, 300));


$(function () {
  // btn_top 상단으로 이동하는 버튼 기능 구현

  $('#btn-top').on('click', function(){
    gsap.to(window, .7, {
      scrollTo:0
    })
  })

  // 스크롤 이벤트 + 각 섹션 fade in 효과

  const spyEls = document.querySelectorAll('section.scroll-spy')

  spyEls.forEach(function(spyEl){
    new ScrollMagic
      .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook : .8 
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
  });

  // section hero 슬라이드 효과

  let w = $('.slide>li').innerWidth()

  $(window).on('resize', function () {
    w = $('.slide>li').innerWidth()
  })


  function nextAni() {
    $('.slide').not(':animated').animate({marginLeft:-w},700,function(){
      $('.slide>li').eq(0).appendTo('.slide')
      $('.slide').css({marginLeft:0})
      $('.slide>li').removeClass('on')
      $('.slide>li').eq(0).addClass('on')

      $('.slide_dots>li').eq(0).appendTo('.slide_dots')
    })    
  }

  function prevAni() {
    $('.slide>li').eq(-1).prependTo('.slide')
    $('.slide').css({marginLeft:-w})
    $('.slide').not(':animated').animate({marginLeft:0},700)

    $('.slide_dots>li').eq(-1).prependTo('.slide_dots')
  }

  function numAni(num) {
    for(let i = 0; i < num; i++) {
      $('.slide>li').eq(0).appendTo('.slide')
      $('.slide_dots>li').eq(0).appendTo('.slide_dots')
    }
  }

  let intv = setInterval(function(){nextAni()}, 7000)

  $('.next').on('click',function(){
    clearInterval()
    nextAni()
    intv = setInterval(function(){nextAni()}, 7000)
  })

  $('.prev').on('click',function(){
    clearInterval()
    prevAni()
    intv = setInterval(function(){nextAni()}, 7000)
  })

  $('.slide_dots>li').on('click',function(){
    let idx = $(this).index();
    console.log(idx)

    clearInterval(intv)
    numAni(idx)
    intv = setInterval(function(){nextAni()}, 7000)
  })

  // sec-prd 탭 메뉴 기능 구현
  $('.btn_prd-list>span').on('click',function(){
    $('.btn_prd-list>span').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()

    $('.prd').removeClass('on')
    $('.prd').eq(idx).addClass('on')
  })
  

  // btn_like & btn_basket 기능 구현
  $('.btn_set > button').on('click', function() {
    const btnName = $(this).attr('class');
    console.log(btnName);

    scrollPreventOn()
    $(this).toggleClass('on');
    $('.screen_pop-up>div').removeClass('on');
    $(`.${btnName}_pop-up`).addClass('on');
    $('.screen_pop-up').toggleClass('on');
  })

  // pop-up창 종료하기 기능 구현

  $('.btn_prev').on('click',function(){
    scrollPreventOff()
    $('.screen_pop-up').removeClass('on')
    $('.btn_set>button').removeClass('on')
  })

  // scroll event 제한 ON
  function scrollPreventOn() {
    $('.mobile-wrap').on('scroll touchmove mousewheel', function(e){
      e.preventDefault();
      e.stopPropagation();
    })
  }

  // scroll event 제한 OFF
  function scrollPreventOff() {
    $('.mobile-wrap').off('scroll touchmove mousewheel');
  }

  // sec-recipe 슬라이드 기능 구현
  let recipeWidth = $('.recipe-list>li').width() + 16

  $(window).on('resize', function () {
    recipeWidth = $('.recipe-list>li').width() + 16
  })

  function recipeNextAni() {
    $('.recipe-list').animate({marginLeft: -recipeWidth},700, function(){
      $('.recipe-list>li').eq(0).appendTo('.recipe-list')
      $('.recipe-list').css({marginLeft:0})
    })
  }

  function recipePrevAni() {
    $('.recipe-list>li').eq(-1).prependTo('.recipe-list')
    $('.recipe-list').css({marginLeft:-recipeWidth})
    $('.recipe-list').animate({marginLeft:0}, 700)
  }  

  $('.recipe-next').on('click', function(){
    recipeNextAni()
  })

  $('.recipe-prev').on('click', function(){
    recipePrevAni()
  })

})