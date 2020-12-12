let p1Score = document.querySelector("#p1Display");
let p2Score = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const select = document.querySelector("#playto");
const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  p1Score.innerText = 0;
  p2Score.innerText = 0;
  p1Score.style.color = "black";
  p2Score.style.color = "black";
  select.value = 3;
  p1Button.disabled = false;
  p2Button.disabled = false;
});

const buttonClick = function (scoreUp, score) {
  scoreUp.innerText = parseInt(scoreUp.innerText) + 1;
  if (parseInt(scoreUp.innerText) >= select.value) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    scoreUp.style.color = "green";
    score.style.color = "red";
  }
};
p1Button.addEventListener("click", function () {
  buttonClick(p1Score, p2Score);
});
p2Button.addEventListener("click", function () {
  buttonClick(p2Score, p1Score);
});
