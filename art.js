"use strict";

const artbtn = document.getElementById("artbtn");

/* Nav Bar */

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* ART GENERATOR */

const myImages = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
];

function getRandomNumber() {
  return Math.floor(Math.random() * myImages.length);
}

let usedimgs = [];

function renderArt() {
  let randomNum = getRandomNumber();
  let randomNum2 = getRandomNumber();
  let randomNum3 = getRandomNumber();

  while (
    randomNum === randomNum2 ||
    randomNum === randomNum3 ||
    randomNum2 === randomNum3 ||
    usedimgs.includes(randomNum) ||
    usedimgs.includes(randomNum2) ||
    usedimgs.includes(randomNum3)
  ) {
    randomNum = getRandomNumber();
    randomNum2 = getRandomNumber();
    randomNum3 = getRandomNumber();
  }

  document.getElementById("myPicture1").src = myImages[randomNum];
  document.getElementById("myPicture2").src = myImages[randomNum2];
  document.getElementById("myPicture3").src = myImages[randomNum3];

  usedimgs = [];
  usedimgs.push(randomNum, randomNum2, randomNum3);
}

artbtn.addEventListener("click", renderArt);
