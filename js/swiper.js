const slider = document.querySelector("#js-slider");
  const scrollbar = document.querySelector("#js-slider__scroll");
  const scrollbar_growbar = document.querySelector("#js-slider__scrollGrowbar");

  var scrollbar_w;
  var scrollbar_drag_w;
  var progress_range;

  new Swiper(slider, {
    spaceBetween: 20,
    slidesPerView: 1,
    grabCursor: true,
    scrollbar: {
      el: scrollbar,
      draggable: true,
    },
    on: {
      resize: () => {
        scrollbar_w = scrollbar.clientWidth;
        scrollbar_drag_w = scrollbar.querySelector(".swiper-scrollbar-drag").clientWidth;
        gsap.to(scrollbar_growbar, {
          width: (scrollbar_w - scrollbar_drag_w) * progress_range + scrollbar_drag_w,
        });
      },
      progress: (swiper, progress) => {
        progress_range = progress;
        gsap.to(scrollbar_growbar, {
          width: (scrollbar_w - scrollbar_drag_w) * progress_range + scrollbar_drag_w,
        });
      },
    },
  });
  scrollbar_w = scrollbar.clientWidth;
  scrollbr_drag_w = scrollbar.querySelector(".swiper-scrollbar-drag").clientWidth;