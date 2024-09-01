
//global variables to check scores
var userScore = 0,computerScore = 0;

function getUserChoice(){
    let userMove = prompt("Enter move:");
    userMove = userMove.toLowerCase()
    return userMove
}

function getComputerMove(){
    let random = parseInt(Math.random() * ((3-1)+1));

    if(random == 1){
        return "rock"
    }
    else if(random == 2){
        return "paper"
    }
    else{
        return "scissor"
    }

}

console.log(getComputerMove());


function checkWinningCondition(userMove,computerMove){

    if(userMove == computerMove){
        return "tie"
    }
    else if(userMove == "rock"){
        if(computerMove == "paper"){
            computerScore++
            return "computer won"

        }
        if(computerMove == "scissor"){
            userScore++
            return "user won"
        }
    }
    else if(userMove == "paper"){
        if(computerMove == "rock"){
            userScore++
            return "user won"
        }
        if(computerMove == "scissor"){
            computerScore++
            return "computer won"
        }
    }
    else if(userMove == "scissor"){
        if(computerMove == "paper"){
            userScore++
            return "user won"
        }
        if(computerMove == "rock"){
            computerScore++
            return "computer won"
        }
    }
}

function playGame(){
    for(let i = 1;i<= 5;i++){
        
        let userMove=getUserChoice()
        let computerMove=getComputerMove()
        console.log("user choose",userMove)
        console.log("computer choose",computerMove)
        console.log(checkWinningCondition(userMove,computerMove))

        console.log("user score:",userScore);
        console.log("computer score:",computerScore);
    }
}

function printWinner(){
    if(userScore>computerScore){
        console.log("The final winner is user!")
    }
    else{
        console.log("The final winner is computer!")
    }
}

playGame()
printWinner()
