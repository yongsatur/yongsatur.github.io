'use strict';

new WOW().init();

$('a[href^="#"').on('click', function () {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 64
    }, {
        duration: 700,
		easing: "linear"
	});
    return false;
});

/* Меню-бургер */

function openMenu() {
    document.getElementById("menu").style.width = "100%";
}
function closeMenu() {
    document.getElementById("menu").style.width = "0";
}

/* Стрелка наверх */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
	});
	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });
});

/* Галерея */

$('.slider').slick({
    centerMode: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    focusOnSelect: true,
    pauseOnHover: false
});
