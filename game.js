
let userPointsHolder = document.getElementById("points-user");
let computerPointsHolder = document.getElementById("points-pc");
let rockbtn = document.getElementsByClassName("rockpc");
let paperbtn = document.getElementsByClassName("paperpc");
let scissorsbtn = document.getElementsByClassName("scissorspc");

function startGame() {
    console.log('hehe')    
    const choiceBtns = document.querySelectorAll(".choicebtn");
    let computer;
    let player;
    let point;
    let computerPoints = 0;
    let userPoints = 0;
    assingPoints(computerPoints,userPoints);  
    choiceBtns.forEach(button => button.addEventListener("click" , () => {
        deselectPC(computer);
        player = button.name;
        computer = getComputerAnswer();
        selectPC(computer);
        point = playRound(player,computer);
        if (point == "player") {
                userPoints= userPoints +1;
            } else if (point == "computer"){
                computerPoints= computerPoints+1;
            } else {}
        
        assingPoints(computerPoints,userPoints);
        
        if ((computerPoints == 5 ) || (userPoints == 5)) {
            if (computerPoints == 5) {
                alert("pc won")
            } else {
                alert("you won")
            }
            location.href = "https://jesusretana15.github.io/rockpapers/";
            
        }

    }));

    
}


function selectPC(answer) {
    if (answer == "rock") {
        document.getElementById("rockpc").setAttribute("class", "selected"); 
 
    } else if (answer == "paper") {
        document.getElementById("paperpc").setAttribute("class", "selected"); 
    } else {
        document.getElementById("scissorspc").setAttribute("class", "selected"); 
    }  

}

function deselectPC(answer) {
    if (answer == "rock") {
        document.getElementById("rockpc").removeAttribute("class", "selected"); 
 
    } else if (answer == "paper") {
        document.getElementById("paperpc").removeAttribute("class", "selected"); 
    } else {
        document.getElementById("scissorspc").removeAttribute("class", "selected"); 
    }  
    
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == computerSelection) {
        console.log("There is a tie!!");
        result = "tie";        
        return result;
    } else if ((playerSelection == "rock" && computerSelection == "scissors")|| (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        result = "player";
        console.log("You Won! " + playerSelection  +" beats " + computerSelection  );
    } else{
        result = "computer";
        console.log("You Lose! " + computerSelection +" beats " + playerSelection  );
    }
    return result;  
    }

    function assingPoints(pcPoints, userPoints) {
        userPointsHolder.textContent = userPoints.toString();
        computerPointsHolder.textContent = pcPoints.toString();
    } 

function getComputerAnswer(){
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



startGame();
