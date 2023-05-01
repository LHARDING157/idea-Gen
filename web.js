"use strict";

/* Nav Bar */

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* IDEA GENERATOR */

const button = document.getElementById("generate-idea");

const showThisMessage = function (message) {
  let displayArea = document.getElementById("display-idea");
  displayArea.innerHTML = message;
};

const showWebsite = function () {
  let randomWebsite = getWebsite();
  showThisMessage(randomWebsite);
};

const pickRandom = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};

button.addEventListener("click", showWebsite);

const getWebsite = function () {
  let website = [];
  website.push("Make a webiste for video sharing and hosting");
  website.push("Make a webiste that lets people upload pictures of thier pets");
  website.push("Make a webiste about magic potatoes");
  website.push("Make a blog website");
  website.push("Make a food related website");
  website.push("Make a healthy eating website");
  website.push("Make a jobs webiste for helping people get jobs");
  website.push("Make a webiste to spread awareness of indangered hobbits");

  const generatedWebsite = pickRandom(website);
  console.log("Generated Idea" + generatedWebsite);
  return generatedWebsite;
};
