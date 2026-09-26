//Dom
const input = document.getElementById("getNumber");
const btn = document.getElementById("btnInput");
const reset = document.getElementById("btnReset");
const text = document.querySelector(".msg-p");
//Estado
const min = 1;
const max = 100;
let tries = 5;

function createRandomNum() {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

let randomGuessNum = createRandomNum();

//Logica
function guessNum(num, randomGuess) {
  if (num < min || num > max) {
    text.textContent = "¡Numero invalido! Numeros validos del 1 al 100.";
  } else {
    if (tries <= 0) {
      text.textContent = "¡Game Over! Intentalo de nuevo.";
      return;
    }

    if (num > randomGuess) {
      text.textContent = "¡Numero muy alto! Intentalo de nuevo.";
      --tries;
    } else if (num < randomGuess) {
      text.textContent = "¡Numero muy bajo! Intentalo de nuevo.";
      --tries;
    } else {
      text.textContent = "¡Felicidades Ganaste! ¿Quieres jugar otra vez?";
    }

    if (tries === 0) {
      text.textContent = "¡Game Over! Intentalo de nuevo.";
    }
  }

  document.querySelector(".tries").textContent = tries;
}

function resetGuess() {
  tries = 5;
  document.querySelector(".tries").textContent = tries;
  text.textContent = "";
  input.value = "";
  randomGuessNum = createRandomNum();
}

document.querySelector(".tries").textContent = tries;

//Eventos
btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    text.textContent = "¡Debes introducir un número!";
    return;
  }
  const guess = Number(input.value);
  guessNum(guess, randomGuessNum);
});

reset.addEventListener("click", () => {
  resetGuess();
});
