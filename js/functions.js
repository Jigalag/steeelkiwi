$(function() {

    $( '#ri-grid' ).gridrotator( {
        rows: 1,
        columns: 7,
        step: 1,
        w1024 : { rows : 1, columns : 5 },
        w768 : {rows : 1,columns : 3 },
        w480 : {rows : 1,columns : 3 },
        w320 : {rows : 1,columns : 3 },
        w240 : {rows : 1,columns : 3 }
    } );

});

var tabsAcc = function () {
    if ($('div[data-content="tabsAccordion"]').length > 0) {
        $('div[data-content="tabsAccordion"]').each(function () {
            var nav = $(this).find('.tabsNavigation .item');
            var acc = $(this).find('.tabsContent .tabTitle');
            var block = $(this).find('.tabsContent .item');

            if ($(window).width() > 850){
                nav.on('click', function (e) {
                    e.preventDefault();
                        var data = $(this).data('tab');
                        nav.removeClass('active');
                        $(this).addClass('active');
                        block.removeClass('open').hide();
                        $(this).parents('.tabsToAcc').find('.tabsContent').find('.item[data-tab=' + data + ']').addClass('open').fadeIn();
                });
            }
            else{
                acc.on('click', function () {
                    if ($(this).hasClass('active')){
                        $(this).removeClass('active').next().slideUp();
                    }
                    else{
                        $('.logos').slideUp();
                        $(this).addClass('active').next().slideDown();
                    }
                })
            }
        });
    }
};

$(document).ready(function(){

    tabsAcc();
    if ($('.navBurger').length > 0){
        $('.navBurger').on('click', function(e){
            e.preventDefault();
            $('body').toggleClass('nonScroll');
            $(this).toggleClass('active').parents('.headerNavigation').find('ul').toggleClass('active');
        });
    }

    if ($('.serviceSlider').length > 0){
        $('.serviceSlider').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: true,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        vertical: false
                    }
                }
            ]

        });
    }


});

$(window).load(function(){

});
$(window).resize(function(){
    tabsAcc();
});
$(window).on('scroll', function() {

});

