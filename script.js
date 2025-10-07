"use strict";
const activeSocial = document.querySelector(".active-social");
console.log(activeSocial);

const shareClick = document.querySelector(".share-click");
console.log(shareClick);

const shareClick2 = document.querySelector(".share-icon2");
console.log(shareClick2);

const check = function () {
  activeSocial.classList.toggle("active");
};

shareClick.addEventListener("click", check);
shareClick2.addEventListener("click", check);
