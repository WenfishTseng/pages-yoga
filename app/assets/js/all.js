$(function () {
  ("use strict");

  AOS.init();
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia("(max-width: 992px)");

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1.5,
      spaceBetween: 30,
    });
  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();

  //comment
  const commentSwiper = new Swiper(".comment-swiper", {
    // Optional parameters
    navigation: {
      nextEl: ".swiper-comment-next",
      prevEl: ".swiper-comment-prev",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: "row",
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      992: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });

  // teacher
  const teacherSwiper = new Swiper(".teacher-swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 4,
      fill: "row",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      992: {
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
    },
  });

  //sug-swiper
  const sugSwiper = new Swiper(".sug-swiper", {
    slidesPerView: 1.25,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4.25,
      },
    },
  });
});
