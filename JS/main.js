const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const slide3 = document.getElementById("slide-3");

setTimeout(() => {
  slide1.style.left = "0%";
}, 500);
setTimeout(() => {
  slide2.style.left = "100%";
}, 500);
setTimeout(() => {
  slide3.style.left = "200%";
}, 500);
