$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        initialSlide: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ],
    });
});