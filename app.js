"use strict";

const button = document.getElementById("generate-idea");

const showThisMessage = function (message) {
  let displayArea = document.getElementById("display-idea");
  displayArea.innerHTML = message;
};

const makeAndShowIdea = function () {
  let randomConcept = getIdea();
  showThisMessage(randomConcept);
};

const pickRandom = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};

button.addEventListener("click", makeAndShowIdea);

const getIdea = function () {
  let idea = [];
  idea.push("Magic");
  idea.push("Apocolypse");
  idea.push("Time Travel");
  idea.push("Space");

  const generatedIdea = "Idea Generated = " + pickRandom(idea);
  console.log("Idea Generated = " + generatedIdea);
  return generatedIdea;
};
