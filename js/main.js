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
            $('header').removeClass('sticktop');
        }else if(currentScrollTop < 90){
            $('header').removeClass('sticktop');
        }else{
            $('header').addClass('sticktop');}
        tempScrollTop = currentScrollTop;
    });
});