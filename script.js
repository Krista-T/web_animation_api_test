"use strict";
const robotRight = document.querySelector("#robotRight");
const robotLeft = document.querySelector(".left");

//animation
const robotAnimate = {
  duration: 5000,
  iterations: 2,
  fill: "forwards",
  easing: "ease-in-out",
  direction: "alternate",
};

//keyframes
const keyFramesRight = [
  { transform: "translateX(-20vw)" },
  { transform: "translateX(34vw)" },
];

const keyFramesLeft = [
  { transform: "translateX(100vw)" },
  { transform: "translateX(49vw)" },
];

document.querySelector(".btn button").addEventListener("click", startAnimation);

function startAnimation() {
  const rightAnimation = robotRight.animate(keyFramesRight, robotAnimate);
  const leftAnimation = robotLeft.animate(keyFramesLeft, robotAnimate);
  Animation.cancel(rightAnimation, leftAnimation);
}
