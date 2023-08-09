function getComputerChoice(){
    return Math.floor(Math.random() * 3);
    
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if(playerSelection == 0){
        if(computerSelection == 1){
            return "Computer won! It picked paper!";
        }
        else{
            return "You Win!";
        }
    }
    else if(playerSelection == 1){
        if(computerSelection == 0){
            return "You Win!";
        }
        else{
            return "Computer won! It picked scissors!";
        }
    } 
    else{
        if(computerSelection == 0){
            return "Computer won! It picked rock!"
        }
        else{
            return "You Win!";
        }
    }

}
//console.log("Choose either rock, paper, or scissors")

const computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));

