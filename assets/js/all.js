"use strict";

$(function () {
  console.log("Hello Bootstrap5");
  var artistSwiper = new Swiper(".artist__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // centeredSlidesBounds:true,
    initialSlide: 1,
    spaceBetween: 0,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      // stretch: 0,
      depth: 200,
      // modifier: 1,
      scale: 0.7,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
  }); // 瀑布流

  $(".grid").masonry({
    // options...
    itemSelector: ".grid-item",
    columnWidth: 200
  });
});
//# sourceMappingURL=all.js.map
