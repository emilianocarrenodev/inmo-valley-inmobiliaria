import './scss/style.scss';
import * as bootstrap from 'bootstrap';

import WOW from 'wowjs';

import Swiper, {Autoplay, Navigation, Pagination, EffectFade} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, EffectFade]);

/*All 'load' load the recurring blocks*/
$("header").load("header.html");
$("footer").load("footer.html");

/*Script swiper*/
const swiper = new Swiper('#slider-main', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

/*Script WOW*/
new WOW.WOW({
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       0,
    mobile:       true,
    live:         true,
    scrollContainer: null
}).init();