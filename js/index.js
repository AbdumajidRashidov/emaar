let slideIndex = 1;
showSlides1(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);

function nextSlide1() {
  showSlides1((slideIndex += 1));
  indicator1.textContent = `${slideIndex}/3`;
}

function previousSlide1() {
  showSlides1((slideIndex -= 1));
  indicator1.textContent = `${slideIndex}/3`;
}

function nextSlide2() {
  showSlides2((slideIndex += 1));
  indicator2.textContent = `${slideIndex}/3`;
}

function previousSlide2() {
  showSlides2((slideIndex -= 1));
  indicator2.textContent = `${slideIndex}/3`;
}

function nextSlide3() {
  showSlides3((slideIndex += 1));
  indicator3.textContent = `${slideIndex}/3`;
}

function previousSlide3() {
  showSlides3((slideIndex -= 1));
  indicator3.textContent = `${slideIndex}/3`;
}

function currentSlide1(n) {
  showSlides1((slideIndex = n));
}
function currentSlide2(n) {
  showSlides2((slideIndex = n));
}
function currentSlide3(n) {
  showSlide3((slideIndex = n));
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("box1");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("box2");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("box3");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
