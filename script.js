const form = document.getElementById("form");
const submit = document.getElementById("submit");
const output = document.getElementById("outputText");
const number = [Math.floor(Math.random() * 100)];
const retry = document.getElementById("retry");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = parseInt(document.getElementById("userInput").value, 10);
  if (inputValue > 100 || inputValue <= 0) {
    output.innerHTML = "Fais un effort, on ta dit un chiffre entre 1 et 100 !";
  } else if (inputValue == number) {
    output.innerHTML = `Quel crack, ton choix était ${number}`;
    retry.style.display = "block";
    submit.style.display = "none";
  } else if (inputValue < number) {
    output.innerHTML = "Fais un effort, c'est plus haut !";
  } else if (inputValue > number) {
    output.innerHTML = "Fais un effort, c'est plus bas !";
  }
});
