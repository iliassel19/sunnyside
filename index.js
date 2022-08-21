const hambugerBtn = document.querySelector(".hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger__line");

const navigation = document.querySelector(".navigation__nav");
hambugerBtn.addEventListener("click", function () {
  hamburgerLines.forEach((line) => line.classList.toggle("toggle"));
  navigation.classList.toggle("nav-open");
});
