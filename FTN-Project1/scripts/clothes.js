let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideIndexx = 1;
showSlidess(slideIndexx);

function plusSlidess(n) {
  showSlidess((slideIndexx += n));
}

function currentSlidess(n) {
  showSlidess((slideIndexx = n));
}

function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndexx = 1;
  }
  if (n < 1) {
    slideIndexx = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexx - 1].style.display = "block";
  dots[slideIndexx - 1].className += " active";
}
