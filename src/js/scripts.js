$(document).scroll(() => {
    svg4everybody()
})

// example scrollTo

$(document).ready(function(){
    $('.header').on("click","a", (e) => {
        e.preventDefault()
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 0;
        $('body,html').animate({scrollTop: top}, 1500)
    })
})

// exaple header float

$(document).scroll(() => {
    let scroll_status = $(document).scrollTop()
    
    if (scroll_status > $('.header').height()) {
      $('.header').addClass('header--float')
    }
    else {
      $('.header').removeClass('header--float')
    }
})