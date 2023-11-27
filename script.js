$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');//adding the icon X to the menu
        $('.nav').toggleClass('nav-toggle');//adding animation class to the menu    
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

        if( $(window).scrollTop() > 10 ){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
});
//popup ao carregar nas fotos, é preciso adicionar o link ao href nas divs das imgs, senão dá erro de "image could not be loaded", caso o href esteja vazio
    $('.facility').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });








});