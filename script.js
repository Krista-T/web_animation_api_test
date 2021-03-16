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

      // put the SVG into the DOM
      document.querySelector("#hand").innerHTML = svgData;

      // TODO: Start the animation
      runAnimation();
    });
}

let car = null;
let curve = null;
let currentPosition;

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
  duration: 4500,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in-out",
  direction: "reverse",
};

// const btnAnimation = {
//   duration: 1000,
//   iterations: 1,
//   fill: "forwards",
//   easing: "ease-in-out",
// }

//keyframes
const keyFramesRight = [
  { transform: "translateX(-50vw)" },
  { transform: "translateX(0vw)" },
];

const keyFramesLeft = [
  { transform: "translateX(50vw)" },
  { transform: "translateX(0vw)" },
];

// const keyFramesBtn = [
//   { transform: "translateY(30vw)" },
//   { transform: "translateY(0vw)" },
//   {opacity: 80%},
// ];

document.querySelector(".btn button").addEventListener("click", startAnimation);

function startAnimation() {
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
