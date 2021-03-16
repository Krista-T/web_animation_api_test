"use strict";

const robotRight = document.querySelector("#robotRight");
const robotLeft = document.querySelector("#robotLeft");
const btn = document.querySelector("#btn button");
//FETCH AND ADD CSS ANIMATION
window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load the SVG");

  fetch("hand.svg")
    .then((response) => response.text())
    .then((svgData) => {
      console.log("svgData");
      document.querySelector("#hand").innerHTML = svgData;
      runAnimation();
    });
}

let hand = null;
let pathLine = null;

function runAnimation() {
  console.log("animate");
  document.querySelector("#hand").classList.add("pathLine");
}

//WEB API ANIMATION
//animation
const robotAnimate = {
  duration: 4500,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in-out",
  direction: "alternate",
};

const robotAnimateReverse = {
  delay: 800,
  duration: 2000,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in-out",
  direction: "reverse",
};

//keyframes
const keyFramesRight = [
  { transform: "translateX(-50vw)" },
  { transform: "translateX(0vw)" },
];

const keyFramesLeft = [
  { transform: "translateX(50vw)" },
  { transform: "translateX(0vw)" },
];

document.querySelector(".btn button").addEventListener("click", startAnimation);

function startAnimation() {
  document.querySelector("button").classList.add("hide");
  document.querySelector("#hand").classList.add("hide");
  robotRight.classList.remove("hide");
  robotLeft.classList.remove("hide");

  const rightAnimation = robotRight.animate(keyFramesRight, robotAnimate);
  const leftAnimation = robotLeft.animate(keyFramesLeft, robotAnimate);

  //pause and start reverse
  rightAnimation.onfinish = () => {
    startReverse();
  };
  leftAnimation.onfinish = () => {
    startReverse();
  };
}

function startReverse() {
  robotRight.animate(keyFramesRight, robotAnimateReverse);
  robotLeft.animate(keyFramesLeft, robotAnimateReverse);
}
