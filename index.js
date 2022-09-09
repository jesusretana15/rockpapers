console.log("Hello!")

// let option0 = "rock";
// let option1 = "paper";
// let option2 = "scissor";

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    let answer ="";
    switch (number) {
        case 0:
            answer = "rock"
            break;

        case 1:
            answer = "paper"
            break;
        
        case 2:
            answer = "scissors"
            break;    
    
        default:
            break;
    }
    return answer; 
}




function getplayerSelection(){
    let answer = "";
    do {
        answer = prompt("Please choose; rock, paper, scissors"); 
        answer = answer.toLowerCase(); 
    } while (answer != "rock" && answer != "paper" && answer != "scissors");
   
    return answer;
}



function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == computerSelection) {
        console.log("There is a tie!!");
        result = "tie";
        
        return result;
    } else if ((playerSelection == "rock" && computerSelection == "scissors")|| (playerSelection == "scissors" && computerSelection == "papper") || (playerSelection == "paper" && computerSelection == "scissrockors")){
        result = "player";
        console.log("You Won! " + playerSelection  +" beats " + computerSelection  );
    } else{
        result = "computer";
        console.log("You Lose! " + computerSelection +" beats " + playerSelection  );
    }
    return result;  
    }

function game(){
    
    let userPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let point = "";
        let userSelection = getplayerSelection();
        let computerSelection = getComputerChoice();
        point = playRound(userSelection,computerSelection);
        if (point == "player") {
            userPoints= userPoints +1;
        } else if (point == "computer"){
            computerPoints= computerPoints+1;
        }
        console.log("Player point: " + userPoints + " vs Computer points: " + computerPoints)
     }
}

game();