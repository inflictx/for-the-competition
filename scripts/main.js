/* //Open popup
let editButton = document.querySelector(".header__complain");
let editPopup = document.querySelector(".popup");
editButton.addEventListener("click", function () {
  editPopup.classList.add("popup_opened");
});

//Close popup
let closeButton = document.querySelector(".popup__close");
closeButton.addEventListener("click", function () {
  editPopup.classList.remove("popup_opened");
}); */

//toggle

const link = document.querySelectorAll(".link");
const header = document.querySelector("header");
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
  for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle("active");
  }
});

//progressBar

const progress = document.getElementById("progressbar");
const totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

//burger animation
const header__burger = document.getElementById("header__burger");
const burger__line = document.querySelectorAll(".burger__line");
header__burger.addEventListener("click", function () {
  for (let i = 0; i < burger__line.length; i++) {
    burger__line[i].classList.toggle("burger__line_active");
  }
});
