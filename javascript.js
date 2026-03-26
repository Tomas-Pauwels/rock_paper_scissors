
let humanScore = 0;
let computerScore = 0;
// playGame()

let current = document.querySelector(".current");
let rockButton = document.querySelector("#roc");
let paperButton = document.querySelector("#paper");
let scissorButton = document.querySelector("#scissors");

let currentMessage = document.createElement("div");
current.appendChild(currentMessage);

let player = document.querySelector(".player");
let computer = document.querySelector(".computer");

let currentHumanScore = document.createElement("span");
currentHumanScore.textContent = String(humanScore);
player.appendChild(currentHumanScore);

let currentComputerScore = document.createElement("span");
currentComputerScore.textContent = String(computerScore);
computer.appendChild(currentComputerScore);


rockButton.addEventListener("click",(event) => {
    event.preventDefault();
    computerSelection = getComputerChoice();
    message = playRound("rock",computerSelection)
    

    currentMessage.textContent = message;
    current.replaceChild(currentMessage,currentMessage);
    currentHumanScore.textContent = String(humanScore);
    player.replaceChild(currentHumanScore,currentHumanScore);
    currentComputerScore.textContent = String(computerScore);
    computer.replaceChild(currentComputerScore,currentComputerScore);

    // alert(message);
});


paperButton.addEventListener("click",(event) => {
    event.preventDefault();

    computerSelection = getComputerChoice();
    message = playRound("paper",computerSelection);
  
    currentMessage.textContent = message;
    current.replaceChild(currentMessage,currentMessage);
    currentHumanScore.textContent = String(humanScore);
    player.replaceChild(currentHumanScore,currentHumanScore);
    currentComputerScore.textContent = String(computerScore);
    computer.replaceChild(currentComputerScore,currentComputerScore);
});

scissorButton.addEventListener("click",(event) => {
    event.preventDefault();

    computerSelection = getComputerChoice();
    message = playRound("scissors",computerSelection);
 
    currentMessage.textContent = message;
    current.replaceChild(currentMessage,currentMessage);
    currentHumanScore.textContent = String(humanScore);
    player.replaceChild(currentHumanScore,currentHumanScore);
    currentComputerScore.textContent = String(computerScore);
    computer.replaceChild(currentComputerScore,currentComputerScore);
});



// function playGame() {
//     for (let round = 1; round<6; round++){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         console.log("computer chose :" + computerSelection);
        
//         message = playRound(humanSelection,computerSelection);
//         alert(message+ "\nRound " + round + ": the human score is " + humanScore + " and the computer score is " + computerScore);
//     }

//     if (humanScore>computerScore){
//         alert("YOU WIN!")
//     } else if (humanScore === computerScore){
//         alert("It's a tie.");
//     } else {
//         alert("You lose...")
//     }
// }



function  getComputerChoice() {
    selector = Math.random()*3;
    if (selector<1) {
        computer_choice = "rock";
    } else if (selector<2) {
        computer_choice = "paper";
    } else {
        computer_choice = "scissors"
    }
    // console.log(computer_choice);
    return computer_choice;
}

function getHumanChoice() {
    let human_choice = prompt("Choose either 'rock', 'paper' or scissors.");
    // let human_choice = "rock"
    // console.log(human_choice);
    return human_choice;
}

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            computerScore = ++computerScore;
            return message = "You lose, rock beats scissors";
        } else if (computerChoice === "scissors") {
            return message = "It's a draw, you both chose scissors";
        } else {
            humanScore = ++humanScore;
            return message = "You win! scissors beat paper"; 
        }
    } else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore = ++computerScore;
            return message = "You lose, paper beats rock";
        } else if (computerChoice === "rock") {
            return message = "It's a draw, you both chose rock";
        } else {
            humanScore = ++humanScore;
            return message = "You win! rock beats scissors";
        }
    } else { //paper
        if (computerChoice === "scissors") {
            computerScore = ++computerScore;
            return message = "You lose, scissors beats paper";   
        } else if (computerChoice === "paper") {
            return message = "It's a draw, you both chose paper";
        } else {
            humanScore = ++humanScore;
            return message = "You win! paper beats rock";
        }
    }
}