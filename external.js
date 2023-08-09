function getComputerChoice(){
    return Math.floor(Math.random() * 3);
    
}
function updateScore(){
    const player = document.getElementById("playerscore");
    const computer = document.getElementById("computerscore")
    console.log(player);
    player.textContent = `Player: ${playerscore}`;
    computer.textContent = `Computer: ${computerscore}`;
}
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if(playerSelection == 0){
        if(computerSelection == 1){
            computerscore++;
            updateScore()
            return "Computer won! It picked paper!";
        }
        else{
            playerscore++;
            updateScore()
            return "You Win!";
        }
    }
    else if(playerSelection == 1){
        if(computerSelection == 0){
            playerscore++;
            updateScore()
            return "You Win!";
        }
        else{
            computerscore++;
            updateScore()
            return "Computer won! It picked scissors!";
        }
    } 
    else{
        if(computerSelection == 0){
            computerscore++;
            updateScore()
            return "Computer won! It picked rock!"
        }
        else{
            playerscore++
            updateScore()
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
            
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        else if(e.target.className == "paper"){
            playerSelection = 1;
            
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        else{
            playerSelection = 2; 
            
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        
    });
    
});


//const computerSelection = getComputerChoice();
//console.log(computerSelection);

//console.log(playRound(playerSelection, computerSelection));

