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
        if (1280 < $('html').width()) {
            currentScrollTop = $(document).scrollTop();
            if (tempScrollTop < currentScrollTop){
                $('header').animate({height:'hide'}, 500).removeClass('listup');
                $('.full-header-width-left, .full-header-width-right').animate({height:'hide'}, 500).removeClass('fixed');
                $('header').animate({height:'hide'}, 500).addClass('listdown');
            }else if(0 < currentScrollTop && currentScrollTop <= 60){
                $('header').animate({height:'show'}, 500).removeClass('listdown', 'listup');
                $('.full-header-width-left, .full-header-width-right').animate({height:'show'}, 500).removeClass('fixed');
            }else{
                $('header').removeClass('listdown');
                $('header').animate({height:'show'}, 500).addClass('listup') && $('.full-header-width-left, .full-header-width-right').animate({height:'show'}, 500).addClass('fixed');
            }
        tempScrollTop = currentScrollTop;
        }else{
            
        }
    });
});