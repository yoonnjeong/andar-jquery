$(function(){
    $(window).scroll(function(){
        var curr = $(this).scrollTop();

        if (curr >= 100) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    })

    $('a.btn-top').click(function(e){
        e.preventDefault();

        $('html, body').animate({scrollTop : 0}, 400, function(){
            $('.quick-icon').fadeOut();
        });
    });

    var swiper1 = new Swiper(".toppopup-swiper", {
        loop : true,
        effect: "fade",
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        }
    });

    $(window).on('mousewheel',function(e){
        var scrollCurr = $(this).scrollTop();
        var wheel = e.originalEvent.wheelDelta;
        if (wheel > 0 && 0 == !scrollCurr) {
            $('.quick-icon').fadeIn();

            // if(0 == scrollCurr){
            //     $('.quick-icon').fadeOut();
            // }
        } else {
            $('.quick-icon').fadeOut();
        }
    });

    // $(window).scroll(function(){
    //     var scrollCurr = $(this).scrollTop();
    //     if (scrollCurr <= 0) {
    //         $('.quick-icon').fadeOut();
    //     }
    // });

    // $(window).trigger('scroll');


    $('header a.btn-tab').click(function(e){
        e.preventDefault();
        $('.gnb').addClass('fixed');
        $('body').addClass('fixed');
    });
    $('.gnb a.btn-close').click(function(e){
        e.preventDefault();
        $('.gnb').removeClass('fixed');
        $('body').removeClass('fixed');
    });
    $('.gnb .depth1').click(function(e){
        e.preventDefault();
        $(this).stop().toggleClass('on');
        $(this).siblings('ul').stop().slideToggle();
    });

    $('.dimmed').click(function(){
        $('body').removeClass('fixed');
        $('.gnb').removeClass('fixed');

    });
    
    $('header a.btn-search').click(function(e){
        e.preventDefault();
        $('body').addClass('fixed');
        $('.search-area').css('display', 'block');
    });
    $('.search-area a.btn-before').click(function(e){
        e.preventDefault();
        $('body').removeClass('fixed');
        $('.search-area').css('display', 'none');
    });

    $('.lab-area .tab').click(function(){
        $(this).parent('.lab-area').stop().toggleClass('open');

        if ($('.lab-area').hasClass('open')) {
            $(this).siblings('.lab-list').css('display' , 'none');
            $(this).siblings('.all-menu').css('display' , 'block');
            $(this).siblings('.all-lab-list').stop().slideDown();
        } else {
            $(this).siblings('.lab-list').css('display' , 'flex');
            $(this).siblings('.all-menu').css('display' , 'none');
            $(this).siblings('.all-lab-list').css('display' , 'flex').stop().slideUp();
        }
    });

    var swiper2= new Swiper(".main-swiper", {
        autoHeight: true,
        effect: "fade",
        loop : true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
            el: ".main-swiper .swiper-pagination",
            hide: false,
        },
    });

    var swiper3 = new Swiper(".sc-swipeleggings .product-swiper", {
        slidesPerView: "2.2",
        spaceBetween: 10,
    });
    var swiper4 = new Swiper(".sc-swipebratop .product-swiper", {
        slidesPerView: "2.2",
        spaceBetween: 10,
    });
    var swiper5 = new Swiper(".sc-swipeset .product-swiper", {
        slidesPerView: "2.2",
        spaceBetween: 10,
    });
});