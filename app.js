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

/*=================
IDEA GENERATOR >>>
=================*/

const button = document.getElementById("generate-idea");

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
  genre.push("Supernatural");
  genre.push("History");
  genre.push("Thriller");
  genre.push("Young Adult");
  genre.push("Travel");
  genre.push("Martial Arts");
  genre.push("Wuxia");
  genre.push("Sci-Fi");
  genre.push("Slice of Life");
  genre.push("Psychological");
  genre.push("Action");

  let theme = [];
  theme.push("Beauty");
  theme.push("Good vs Evil");
  theme.push("Coming of Age");
  theme.push("Loyalty");
  theme.push("Betrayal");
  theme.push("Life and Death");
  theme.push("Justice");
  theme.push("Family");
  theme.push("Power");
  theme.push("Tradition");
  theme.push("Circle of Life");
  theme.push("Loneliness");
  theme.push("Revenge");

  let setting = [];
  setting.push("In a tatto parlor");
  setting.push("At the zoo at night");
  setting.push("In an abandoned mental hospital");
  setting.push("Under the water");
  setting.push("In a factory");
  setting.push("In the vault of a bank");
  setting.push("On the edge of a cliff");
  setting.push("In a haunted house");
  setting.push("In another world");
  setting.push("Outside a castle");
  setting.push("Overlooking mountains");
  setting.push("House at the peak of a mountain");
  setting.push("Leader of a sect");
  setting.push("Thrown out of a ruined sect");

  const generatedGenre =
    "Genre = " +
    pickRandom(genre) +
    " / " +
    "Theme = " +
    pickRandom(theme) +
    " / " +
    "Setting = " +
    pickRandom(setting);
  console.log("Generated Idea = " + generatedGenre);
  return generatedGenre;
};

/* ===========
OOOOO BALL >>>
============*/

function redBall() {
  let x = document.createElement("LINK");
  x.setAttribute("rel", "stylesheet");
  x.setAttribute("type", "text/css");
  x.setAttribute("href", "animation.css");
  document.head.appendChild(x);
  alert(
    "Yay! That's not gonna stop now so good luck! Muhahahaha its your problem now IM FREEEEEEEE"
  );
}
