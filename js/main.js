$(document).ready(function() {
    //accordeon
    $('.accordeon li > h2').click(function(){
        if(!$(this).hasClass('active')){
            $('.accordeon li > h2').removeClass('active').next('.vacancycontent').slideUp();
            $(this).addClass('active');
            $(this).next('.vacancycontent').slideDown(200);
            } else {
                $(this).removeClass('active').next('.vacancycontent').slideUp();
            }
    });
    // scroll trace
    var tempScrollTop, currentScrollTop = 0;
    $(document).scroll(function(){
        currentScrollTop = $(document).scrollTop();
        if (tempScrollTop < currentScrollTop){
            $('header').removeClass('sticktop').animate({height: "hide"}, 600);
        }else if(currentScrollTop < 90){
            $('header').removeClass('sticktop');
        }else{
            $('header').addClass('sticktop').animate({height: "show"}, 400);}
        tempScrollTop = currentScrollTop;
    });
});