$(function(){
    // login tab 버튼 기능 구현
    $('.tab > a').on('click', function(e){
      e.preventDefault();
  
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
  
      let target = $(this).attr('href');
  
      $('.tab-content > div').not(target).hide();
      $(target).fadeIn(600);
    })
})