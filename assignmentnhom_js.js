$(function() {
    $('.slider img:gt(0)').hide();
    setInterval(function(){
        $('.slider :first-child').fadeOut(2000)
            .next('img').fadeIn(2000) //
            .end().appendTo('.slider');
    }, 5000);
});

$(document).ready(function() {
    $('.uudai_text').slideUp();

    $('.uudai').on('click', function(event) {
        event.preventDefault();
        $(this).next().slideToggle();
        $('html, body').animate({scrollTop:$(this).offset().top},400);
    });
    $('#btn-top').click(function(event) {
        $('html, body').animate({scrollTop:0},400);
    });
});
