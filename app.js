"use strict";
/*=========
Nav Bar >>>
==========*/
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const button = document.getElementById("generate-idea");
/*=================
GENRE GENERATOR >>>
=================*/
const showThisMessage = function (message) {
  let displayArea = document.getElementById("display-idea");
  displayArea.innerHTML = message;
};

const showConcept = function () {
  let randomGenre = getConcept();
  showThisMessage(randomGenre);
};

const pickRandom = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};

button.addEventListener("click", showConcept);

const getConcept = function () {
  let genre = [];
  genre.push("Fantasy");
  genre.push("Adventure");
  genre.push("Romance");
  genre.push("Mystery");
  genre.push("Horror");
  genre.push("Science Fiction");
  genre.push("History");
  genre.push("Thriller");

  let theme = [];
  theme.push("Fantasy");

  const generatedGenre =
    "Genre = " + pickRandom(genre) + " / " + "Theme = " + pickRandom(theme);
  console.log("Genre = " + generatedGenre);
  return generatedGenre;
};
