import './scss/style.scss';
import * as bootstrap from 'bootstrap';

import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Thumbs]);

/*All 'load' load the recurring blocks*/
$("header").load("header.html");
$("footer").load("footer.html");