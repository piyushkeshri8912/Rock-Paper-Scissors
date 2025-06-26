function getComputerChoice(n) {
  if (n == 0) {
    return "rock";
  } else if (n == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice(str) {
  return str;
}
let humanScore=0;
let computerScore=0; 


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else if(humanChoice=="rock" && computerChoice=="scissors" || humanChoice=="paper" && computerChoice=="rock" || humanChoice=="scissors" && computerChoice=="paper"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else{
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

for(let i=1;i<=5;i++){
    let str = prompt("Enter your choice").toLowerCase();
    let humanSelection = getHumanChoice(str);
    let computerSelection = getComputerChoice(Math.floor(Math.random()*3));
    playRound(humanSelection, computerSelection);
}
if(humanScore>computerScore){
    console.log(`You win! your score: ${humanScore} computer score: ${computerScore}`)
}
else if(humanScore<computerScore){
    console.log(`You lose! your score: ${humanScore} computer score: ${computerScore}`)  
}
else{
    console.log("It's a Draw")
}