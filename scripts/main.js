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
const a = document.querySelector("a");
const header = document.querySelector("header");
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
  a.classList.toggle("active");
});

console.log("test");
