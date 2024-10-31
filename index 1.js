let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // Hide all slides first
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Move to the next slide
  slideIndex++;
  // Reset index if it exceeds the number of slides
  if (slideIndex > slides.length) {slideIndex = 1}    
  // Show the current slide
  slides[slideIndex-1].style.display = "block";  
  // Change the slide every 2 seconds
  setTimeout(showSlides, 2000);
}