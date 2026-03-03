
getComputerChoice();

function  getComputerChoice() {
    selector = Math.random()*3;
    if (selector<1) {
        computer_choice = "rock";
    } else if (selector<2) {
        computer_choice = "paper";
    } else {
        computer_choice = "scissors"
    }
    console.log(computer_choice);
    return computer_choice;
}