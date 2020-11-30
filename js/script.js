$(() => {
  const top__wrapperHeight = $('.top__wrapper').outerHeight();
  const topHeight = $('.top').outerHeight();
  console.log(topHeight);

  $('.burger-btn').on('click', (e) => {
    if($(window).scrollTop() < topHeight - 50 ){
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('notScroll');
    } else {
      $('.bar, .menu').toggleClass('black')
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('notScroll');
    }
  })

  $(window).on('load scroll', () => {
    // スクロールした時のロゴの色変更
    if ($(window).scrollTop() < top__wrapperHeight - 50){
      $('.logo svg path').removeClass('logo-black')
    } else {
      $('.logo svg path').addClass('logo-black')
    }

    // スクロールした時のメニューの色変更
    if ($(window).scrollTop() < topHeight - 50){
      $('.bar, .menu').removeClass('black')
    } else {
      $('.bar, .menu').addClass('black')
    }
  })
});