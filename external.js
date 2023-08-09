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
var playerSelection = 0;
var playerscore = 0;
var computerscore = 0; 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        if(e.target.className == "rock"){
            playerSelection = 0;
            console.log(playerSelection);
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        else if(e.target.className == "paper"){
            playerSelection = 1;
            console.log(playerSelection);
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        else{
            playerSelection = 2; 
            console.log(playerSelection);
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        
    });
    
});

//const computerSelection = getComputerChoice();
//console.log(computerSelection);

//console.log(playRound(playerSelection, computerSelection));

