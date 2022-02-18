function computerPlay() {
    /*
        Simple function that somewhat randomly selects the computers move.

        It does this by randomly picking a number between 1 and 15, if the number
        is between 1-5 it selects rock, 6-10 paper and 11+ scissors.
    */
    let rval = Math.floor(Math.random() * 15) + 1
    if(rval <= 5) {
        return "rock";
    } else if (rval <= 10) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    // check that player input isn't trash
    if(typeof playerSelection != 'string') {
        return "error";
    }
    // sanitize player input
    let sanPlayerSelection = playerSelection.toLowerCase();
    if(sanPlayerSelection !== 'rock' && sanPlayerSelection !== 'paper' && sanPlayerSelection !== 'scissors') {
        // TODO raise an error or something here
        return "error";
    }
    // handle tie conditions first
    if(sanPlayerSelection == computerSelection) {
        return "tie";
    }
    // Player input rock
    if(sanPlayerSelection == 'rock') {
        if(computerSelection == 'scissors') {
            return "player";
        } else {
            return "ai";
        }
    }
    // Player input paper
    else if(sanPlayerSelection == 'paper') {
        if(computerSelection == 'rock'){
            return "player";
        } else {
            return "ai";
        }
    }
    // Player input scissors, we sanitized the input above so we shouldn't need to be too specific here.
    else {
        if(computerSelection == 'paper') {
            return "player";
        } else {
            return "ai";
        }
    }
}

function game() {
    let playerScore = 0;
    let aiScore = 0;
    for(let i = 0; i < 5; i++) {
        let round = i + 1;
        let playerInput = prompt("Round " + round + ", player, enter your selection: ");
        let aiInput = computerPlay();
        let roundWinner = playRound(playerInput, aiInput);
        if(roundWinner == 'tie'){
            console.log("Round " + round + " was a tie!, score is " + playerScore + " to " + aiScore);
        } 
        else if(roundWinner == 'player'){
            playerScore += 1;
            console.log("Round " + round + " goes to the player!, score is " + playerScore + " to " + aiScore);
        }else{
            if(roundWinner == 'error') {
                console.log("Due to garbage player input, this round is forfeit to the computer!");
            }
            aiScore += 1;
            console.log("Round " + round + " goes to the computer!, score is " + playerScore + " to " + aiScore);
        }
    }
    console.log("That's game folks!  The finial score is Player " + playerScore + " to Computer " + aiScore);
    if(playerScore == aiScore){
        console.log("It was overall a tie");
    } else if(playerScore > aiScore){
        console.log("The player has won!");
    } else {
        console.log("The computer has won!");
    }
}


