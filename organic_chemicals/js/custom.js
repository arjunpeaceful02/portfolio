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
