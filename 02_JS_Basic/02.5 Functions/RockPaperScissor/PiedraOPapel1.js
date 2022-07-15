/*3. Realiza un juego de piedra, papel o tijera,  en el cual el usuario ingrese su
nombre y la opción que quiera y el juego devuelva el ganador*/

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


//Para asignar la elección del usuario cuando preciona el boton a la variable UserChoiseDisplay 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id //Asigna a variable userChoise. el boton que presionó 
  userChoiceDisplay.innerHTML = userChoice //Asigna internamente el resultado del click del usuario a la variable UserChoice
  generateComputerChoice() //Se llama a la función computer choise
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random()*possibleChoices.length) + 1 // or you can use possibleChoices.length To generate random numbers between 1 and 3 
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}
     
     
     
     
     