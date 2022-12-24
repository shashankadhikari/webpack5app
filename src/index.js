import generateJoke from "./generateJoke";
import "./styles/main.scss";
import fun from "./assets/fun.svg";

const laughImg = document.getElementById("laughImg");

laughImg.src = fun;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", () => {
  generateJoke();
  tl.fromTo(".container", { scale: 0 }, { scale: 1 });
  tl.fromTo(".joke", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
  tl.fromTo(".btn", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
});
generateJoke();

// animation starts

const tl = gsap.timeline({ defaults: { duration: 0.75 } });

tl.fromTo(".container", { scale: 0 }, { scale: 1 });
tl.fromTo(".joke", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
tl.fromTo(".btn", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
