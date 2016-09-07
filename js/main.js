$(document).ready(function() {
    $('.accordeon li > h2').click(function(){
        if(!$(this).hasClass('active')){
            $('.accordeon li > h2').removeClass('active').next('.vacancycontent').slideUp();
            $(this).addClass('active');
            $(this).next('.vacancycontent').slideDown(200);
            } else {
                $(this).removeClass('active').next('.vacancycontent').slideUp();
            }
    });
});