var swiper = new Swiper(".banner-slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".comment-slider", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".most-product-slider", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Myself make slide-show
const track = document.querySelector(".slider-wrapper");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".right");
const prevButton = document.querySelector(".left");

const slideWidth = slides[0].getBoundingClientRect().width;

// set position the slide
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// when I click left, move slides to the left

prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

// when I click right, move slides to the right
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  // move the slide
  moveToSlide(track, currentSlide, nextSlide);
});

// var swiper = new Swiper(".category-slider", {
//   loop:true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
