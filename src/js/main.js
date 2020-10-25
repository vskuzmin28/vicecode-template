$(document).scroll(function () {
    svg4everybody();
})

$(document).ready(function(){
    $(".header, footer, .main__tags").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 0;
        $('body,html').animate({scrollTop: top}, 1500)
    })
})

$(document).scroll(function () {
    let scroll_status = $(document).scrollTop();
    let ww = $(window).width();
    
    if (scroll_status > $(".header").height()) {
      $(".header").addClass('header--float');
    }
    else {
      $(".header").removeClass('header--float')

    }
})

$('.menu').on('click', (e) => {
    e.preventDefault();
    
    $('.menu__default, .menu__active').toggleClass('is-hidden')
    $('.navigation').toggleClass('is-visible')
})

$('.navigation__link').on('click', (e) => {
    e.preventDefault();
    
    $('.menu__default, .menu__active').toggleClass('is-hidden')
    $('.navigation').toggleClass('is-visible')
})
