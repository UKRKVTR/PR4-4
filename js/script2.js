const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape4",
  },
];

let slideIndex = 0;
const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");
const imgSlider = document.querySelector(".slider");

updateSlide(slideIndex);

function nextSlideHandler() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlide(slideIndex);
}
function prevSlideHandler() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlide(slideIndex);
}
function updateSlide(slideIndex) {
  imgSlider.src = slides[slideIndex].src;
  imgSlider.alt = slides[slideIndex].alt;
}

nextBtn.addEventListener("click", nextSlideHandler);
prevBtn.addEventListener("click", prevSlideHandler);
