"use strict"

let nav = document.querySelector(".nav__list");

function navShrink() {
    nav.classList.toggle("nav-shrink");
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.opacity = "1"
  } else {
    backtop.style.opacity = "0"
  }
}