"use strict";

const robotRight = document.querySelector("#robotRight");
const robotLeft = document.querySelector("#robotLeft");

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
