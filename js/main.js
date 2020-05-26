$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000
    });


    $('.gear-check').click(function(){

        $('.color-option').fadeToggle();
    });


    var colorLi = $('.color-option ul li')

    colorLi
    .eq(0).css('backgroundColor', '#E41B17').end()
    .eq(1).css('backgroundColor', 'blue').end()
    .eq(2).css('backgroundColor', 'green').end()
    .eq(3).css('backgroundColor', 'gold');


    colorLi.click(function(){
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
    });

    var scrollButton = $('#scroll-top');

    $(window).scroll(function(){
        if($(this).scrollTop() >= 700)
        {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }

        
    });

    scrollButton.click(function(){
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });


});



$(window).load(function(){
    $('.load-screen .spinner').fadeOut(1000, function(){
        $(this).parent().fadeOut(1000,function(){
            $('body').css('overflow','auto');
            $(this).remove();
        });
    });
});