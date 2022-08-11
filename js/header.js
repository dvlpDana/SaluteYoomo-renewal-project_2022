$(function () {
  // header icon-search 기능구현
  $('.icon_search').on('click', function () {
    $('.search-area').slideDown(400)
  })

  $('.btn_close').on('click', function (e) {
    $('.search-area').slideUp(400)
    e.preventDefault(e);
  })

  // header 모바일 메뉴
  $('.btn_ham').on('click', function () {
    $(this).toggleClass('on')
    $('.main-nav').toggleClass('on')
    $('.nav_bg').fadeToggle(300)
  })

  $('.global-nav>li>a').on('click', function (e) {
    e.preventDefault()
  })

  $('.global-nav>li').on('click', function () {
    if ($(this).attr('class') != 'on') {
      $('.sub-nav').slideUp(300)
      $(this).find('.sub-nav').slideToggle(300)
      $('.global-nav>li').removeClass('on')
      $(this).addClass('on')
    } else {
      $(this).find('.sub-nav').slideToggle(300)
      $('.global-nav>li').removeClass('on')
    }
  })

  // header badge 효과 - lodash + gsap 라이브러리 활용

  $('.btn_badge-close').on('click', function () {
    $('.badge').css("display", "none")
  })

})