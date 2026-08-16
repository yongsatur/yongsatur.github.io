'use strict';

new WOW().init();

/* Вычисление высоты меню */

const updateMenuHeight = () => {
    const menu = document.querySelector('.navigate'); 
    if (menu) {
        const height = menu.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--menu-height', `${height}px`);
    }
};

window.addEventListener('DOMContentLoaded', updateMenuHeight);
window.addEventListener('resize', updateMenuHeight);

/* Стрелка на верх страницы */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
	});
	$('.scrollup').click(function () {
		window.scrollTo({ top: 0 });
    });
});

/* Галерея */

const $slider = $('.slider').slick({
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,    
    touchThreshold: 20,    
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    focusOnSelect: true,
    pauseOnHover: false
});

$slider.on('wheel', function(e) {
    e.preventDefault(); 

    if (e.originalEvent.deltaY > 0) {
        $(this).slick('slickNext'); 
    } else {
        $(this).slick('slickPrev'); 
    }
});

/* Выделение пунктов меню при прокрутке */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id], .about');
    const navLinks = document.querySelectorAll('#navigate .nav-link');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -65% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains('about') || target.id === 'about') {
                navLinks.forEach(link => link.classList.remove('active'));
                return; 
            }

            const id = entry.target.getAttribute('id');
            const currentLink = document.querySelector(`#navigate .nav-link[href="#${id}"]`);
            if (currentLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                currentLink.classList.add('active');
            }
        }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});