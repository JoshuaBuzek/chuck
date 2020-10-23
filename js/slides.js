var sliderIndex = 1;
showSliders(sliderIndex);

function plusSliders(n) {
  showSliders(sliderIndex += n);
}

function currentSlider(n) {
  showSliders(sliderIndex = n);
}

function showSliders(n) {
  var i;
  var sliders = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > sliders.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = sliders.length}
    for (i = 0; i < sliders.length; i++) {
      sliders[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  sliders[sliderIndex-1].style.display = "block";
  dots[sliderIndex-1].className += " active";
}