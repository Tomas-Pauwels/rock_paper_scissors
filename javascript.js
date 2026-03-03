
let humanScore = 0;
let computerScore = 0;


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("computer chose :" + computerSelection);
playRound(humanSelection,computerSelection);
console.log("the human score is " + humanScore + "the computer score is " + computerScore);

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
    // let human_choice = prompt("Choose either 'rock', 'paper' or scissors.");
    let human_choice = "scissors"
    // console.log(human_choice);
    return human_choice;
}

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            console.log("You lose, rock beats scissors");
            computerScore = ++computerScore;
        } else if (computerChoice === "scissors") {
            console.log("It's a draw, you both chose scissors");
        } else {
            console.log("You win! scissors beat paper");
            humanScore = ++humanScore;
        }
    } else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("You lose, paper beats rock");
            computerScore = ++computerScore;
        } else if (computerScore === "rock") {
            console.log("It's a draw, you both chose rock");
        } else {
            console.log("You win! rock beats scissors");
            humanScore = ++humanScore;
        }
    } else { //paper
        if (computerChoice === "scissors") {
             console.log("You lose, scissors beats paper");
            computerScore = ++computerScore;
        } else if (computerChoice === "paper") {
            console.log("It's a draw, you both chose paper");
        } else {
            console.log("You win! paper beats rock");
            humanScore = ++humanScore;
        }
    }
}