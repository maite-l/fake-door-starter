import JSConfetti from "js-confetti";
//use this, not like in previous exercise
import "../css/style.css";



const init = () => {
  const $form = document.querySelector("form");
  const jsConfetti = new JSConfetti()

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    jsConfetti.addConfetti();
  });
}


init();