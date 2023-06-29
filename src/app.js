import './scss/style.scss';
import * as bootstrap from 'bootstrap';

import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Thumbs]);

/*All 'load' load the recurring blocks*/
$("header").load("header.html");
$("footer").load("footer.html");

/*Script swiper*/
const swiper = new Swiper('#slider-main', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});