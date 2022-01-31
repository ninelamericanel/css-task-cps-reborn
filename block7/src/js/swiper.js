import Swiper, {Pagination} from "swiper";

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

Swiper.use([Pagination]);

new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: 'auto',
  slidesPerColumn: 1,
});
