

// get user choice
// get computer choice by assigning random number
// compare results and determine outcome
// initiate game and return outcome

// facilitate human's choice
// lowercase any input to ensure consistent result
// error message beyond game boundary

// to do
// add bomb cheat code - user types in bomb and automatically wins

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const humanSubmission = document.getElementById('human-submission');
const playBtn = document.getElementById('play-btn');
const gameText = document.getElementById('game-text');


// rock button text input
rockBtn.addEventListener('click', () => {
  humanSubmission.value = '';
  humanSubmission.value += 'rock';
  
});

// paper button text input
paperBtn.addEventListener('click', () => {
  humanSubmission.value = '';
  humanSubmission.value += 'paper';
});

// scissors button text input
scissorsBtn.addEventListener('click', () => {
  humanSubmission.value = '';
  humanSubmission.value += 'scissors';
});

const humanChoice = (humanInput) => {
  humanInput = humanInput.toLowerCase();
  if (
    humanInput === 'rock' ||
    humanInput === 'paper' ||
    humanInput === 'scissors'
  ) {
    return humanInput;
  } else {
    return 'a big error! Whoops! Please only input rock, paper, or scissors';
  }
};
//

// generate computer choice using Math.random() floored
// random choice switch case to assign to either 3 options
const computerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

// determines outcome of game selection
const checkWinner = (humanSelection, computerSelection) => {

  // user rock outcome
  if (humanSelection === 'rock') {
    if (computerSelection === 'rock') {
      return "Your rock hits computer's rock! It's a tie! Try again.";
    } else if (computerSelection === 'paper') {
      return "Your rock was captured and covered by computer's paper. You lose! Try again.";
    } else if (computerSelection === 'scissors') {
      return "Your rock crushed computer's puny scissors. You win!";
    }
  }

  // user paper outcome
  if (humanSelection === 'paper') {
    if (computerSelection === 'rock') {
      return "Your paper captured computer's little rock! You win!";
    } else if (computerSelection === 'paper') {
      return "Your paper met computer's paper. It's a tie! Try again.";
    } else if (computerSelection === 'scissors') {
      return "Snip! Computer's scissors sliced your paper. You lose! Try again.";
    }
  }

  // user scissors outcome
  if (humanSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return "Computer's rock just crushed your scissors. You lose! Try again.";
    } else if (computerSelection === 'paper') {
      return "Snip! Your scissors sliced through computer's paper. You win!";
    } else if (computerSelection === 'scissors') {
      return "Snip??? Your scissors met computer's scissors. It's a tie! Try again.";
    }
  }

  // user error outcome
  if (humanSelection === undefined) {
    alert("Computer waits patiently") 
    }
  };

// play game function
const playGame = () => {
  const humanSelection = humanChoice(document.getElementById('human-submission').value) 
  const computerSelection = computerChoice();
  let gameString = (`You picked ${humanSelection} and computer picked ${computerSelection}.`);

  document.getElementById('game-status').innerHTML = gameString;
  let winner = checkWinner(humanSelection, computerSelection);
  document.getElementById('game-outcome').innerHTML = winner || "Computer still waiting patiently...";
};


document.getElementById('play-game').addEventListener('click', playGame);
