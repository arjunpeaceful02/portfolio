


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".sentirMainHeader").addClass("scrolled");
    } else {
        $(".sentirMainHeader").removeClass("scrolled");
    }
});


$(".burger").click(function () {
    $(".mobileMenu").addClass("show");
});

$(".burgerClose").click(function () {
    $(".mobileMenu").removeClass("show");
});


$('.productsWrapper .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:2.3,
            nav:true
        },
        600:{
            items:2.3,
            nav:true
        },
        1000:{
            items:4,
            nav:true
        }
    }
});

$('.galleryWrapper .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:2.3,
            nav:true
        },
        600:{
            items:2.3,
            nav:true
        },
        1000:{
            items:3,
            nav:true
        }
    }
});

