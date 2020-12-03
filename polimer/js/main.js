const btnToOrder = document.getElementById('catalog-to-order');
const btnCatalogSerial = document.getElementById('catalog-serial');

if (window.innerWidth > 576) {
    function catalog() {

        const containerToOrder = document.querySelector('.catalog-choice');
        const containerCatalogSerial = document.querySelector('.two-catalog-choice');

        btnToOrder.onclick = function() {
            containerToOrder.classList.add('d-flex');
            containerCatalogSerial.classList.remove('d-flex');

            btnToOrder.classList.add('package-to-buy_active');
            btnCatalogSerial.classList.remove('package-to-buy_active');
        }
        btnCatalogSerial.onclick = function() {
            containerToOrder.classList.remove('d-flex');
            containerCatalogSerial.classList.add('d-flex');

            btnToOrder.classList.remove('package-to-buy_active');
            btnCatalogSerial.classList.add('package-to-buy_active');
        }
    }
    catalog();
} else {
    function catalogmobile() {

        const containerToOrderMobile = document.querySelector('.width-catalog-mobile');
        const containerCatalogMobile = document.querySelector('.two-width-catalog-mobile');

        btnToOrder.onclick = function() {
            containerToOrderMobile.classList.add('d-flex');
            containerCatalogMobile.classList.remove('d-flex');

            btnToOrder.classList.add('package-to-buy_active');
            btnCatalogSerial.classList.remove('package-to-buy_active');
        }
        btnCatalogSerial.onclick = function() {
            containerToOrderMobile.classList.remove('d-flex');
            containerCatalogMobile.classList.add('d-flex');

            btnToOrder.classList.remove('package-to-buy_active');
            btnCatalogSerial.classList.add('package-to-buy_active');
        }
    }
    catalogmobile();
}

console.log(window.clientWidth)

$(document).ready(function() {

    $('.catalog-choice-container').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: '30px'
    });

    $('.slider-container').slick({
        // autoplay: true,
        prevArrow: '.next-ar',
        nextArrow: '.prew-ar',
        dots: false,
        // arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        centerPadding: '10px',
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]
    });

});

$(function() {
    $('.reviews-slider').slick({
        dots: false,
        prevArrow: $('.reviews-arrows .prev'),
        nextArrow: $('.reviews-arrows .next'),
        infinite: false,
        speed: 450,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '30px',
                    centerMode: false,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 470,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    centerPadding: '30px',
                }
            }
        ]
    });
});

$(".reviews-slider").on('afterChange', function(event, slick, currentSlide) {
    $(".count__dinamic").text(currentSlide + 1);
});