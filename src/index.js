import "./styles.css";

const quoteResult = document.getElementById("quote-result");
const generateBtn = document.getElementById("generate-btn");

function newQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceObject = adviceData.slip;
      quoteResult.innerHTML = `<p>${adviceObject.advice}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = newQuote();

generateBtn.addEventListener("click", () => {
  newQuote();
});
