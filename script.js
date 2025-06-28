function getComputerChoice(n) {
  if (n == 0) {
    return "rock";
  } else if (n == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore=0 , computerScore=0 ,draw =0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock"||humanChoice=="paper"||humanChoice== "scissors") {
        if (humanChoice == computerChoice) {
            draw++
            alert(`It's a Draw! \nYour score : ${humanScore} , Computer score : ${computerScore}, Draws : ${draw}`)
        }
        else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            alert(`You Win! ${humanChoice} beats ${computerChoice}\nYour score : ${humanScore} , Computer score : ${computerScore}, Draws : ${draw}`);
        } else {
            computerScore++;
            alert(`You Lose! ${computerChoice} beats ${humanChoice}\nYour score : ${humanScore} , Computer score : ${computerScore}, Draws : ${draw}`);
        }
    }
    else{
        alert("Invalid input")
    }
}

for(let i=1;i<=5;i++){
    let humanSelection = prompt("Enter your choice").toLowerCase();
    let computerSelection = getComputerChoice(Math.floor(Math.random()*3));
    playRound(humanSelection, computerSelection);
}
if(humanScore>computerScore){
    alert(`You win! your score: ${humanScore} computer score: ${computerScore}`)
}
else if(humanScore<computerScore){
    alert(`You lose! your score: ${humanScore} computer score: ${computerScore}`)  
}
else{
    alert("It's a Draw")
}