$(document).scroll(function () {
    svg4everybody()
})

$(document).ready(function(){
    $('.header, footer, .main__tags').on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 0;
        $('body,html').animate({scrollTop: top}, 1500)
    })
})