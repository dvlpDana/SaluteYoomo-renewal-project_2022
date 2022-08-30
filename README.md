# SaluteYoomo 리뉴얼 프로젝트(22.05.30~22.06.10)

![project_3_mockup](https://user-images.githubusercontent.com/102039456/187319935-bfed9983-ed38-4cda-9fdd-95b7137c2d60.jpg)

Demo : [https://dvlpdana.github.io/SaluteYoomo-renewal-project_2022/](https://dvlpdana.github.io/SaluteYoomo-renewal-project_2022/)

<br />

## 프로젝트 개발목표

<p align="justify" lineHeight="1.6" >
-  포인트 컬러 활용으로 Brand Identity 강조 <br/ >
-  jQuery Library를 활용하여 사용자의 움직임에 따른 Interactive Effect 적용 <br/ >
-  Media query 사용하여 미디어 사이즈에 따라 크기와 배치가 달라지는 반응형 웹 제작 <br/ >
</p>

<br />

## 기술 스택

| JavaScript |    JQuery   |    HTML   |   CSS   |
| :--------: | :---------: | :------: | :------: |
|   <img src="https://user-images.githubusercontent.com/102039456/187168448-0611cda1-c3e6-4fd7-bc1c-30da00bab9cd.png" width="35" height="50" >    |   <img src="https://user-images.githubusercontent.com/102039456/187320976-6a4d77f3-31e8-47c0-b1c6-ab0589b2bfd1.png" width="50" height="50" >    |   <img src="https://user-images.githubusercontent.com/102039456/187320974-e67dcaa0-529e-4092-956c-56f3c92c0770.png" width="35" height="50" >   |   <img src="https://user-images.githubusercontent.com/102039456/187320969-00071316-6aae-4612-9991-102a10bf055d.png" width="35" height="50" >   |

<br>

## Advandced Feature

### 1. Gsap 플러그인 활용하여 사용자의 스크롤 움직임에 따른 Effect 적용
> 코드(common.js)
```javascript
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
```

> 구현화면
<img src="https://user-images.githubusercontent.com/102039456/187323188-c21c8852-2cf3-447f-b0a8-e4a62e9e6280.gif">

### 2. jQuery 라이브러리 활용하여 Carousel slide, pagenation 기능 구현
> 코드(SignUp.jsx)
```javascript
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

```
> 구현화면
<img src="https://user-images.githubusercontent.com/102039456/187323300-f0dd71e8-0136-4b89-ae70-05110bc85b11.gif">

<br />

## 개선사항

<p align="justify">
- 텍스트 애니메이션을 자바스크립트로 적용하여 페이지네이션 클릭 시, 텍스트 애니메이션도 동일하게 시작하도록 하기 <br/>
- 로그인 페이지에 필수 입력값 입력한 후, 버튼 색 바뀌도록 자바스크립트 활용하여 효과 적용하기
</p>

<br />

## 라이센스

MIT &copy; [dvlpDana](mailto:colleksql3@gmail.com)



