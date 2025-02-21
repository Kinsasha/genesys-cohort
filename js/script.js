/*let yourName = prompt('What is your name : ', '');

if (yourName === 'Admin') {
    let password = prompt('Your password? ": ', '')
    if (password === 'The master') {
        alert('Welcome')
    }
    else if (password === '' || null) {
        alert('Canceled')
    }
    else {
        alert('Wrong password')
    }
}

else if (yourName === '' || null) {
    alert('Canceled')
}
else {
    alert('Wrong name') 
}


//Test 2
function numCheck(num) {
 if (num < 5) {
 return 'tiny'
 }
 else if (num < 10) {
    return 'small'
 }
 else if (num < 15) {
    return 'medium'
 }
 else if (num < 20) {
    return 'large'
 }
 else if (num > 20) {
    return 'huge'
 }
}


        //console.log('hello world')

        function getComputerChoice() {
            let guess = Math.floor(Math.random() * 3);
            if (guess === 0) {
               return "Rock";
            }  else if (guess === 1) {
               return "Paper";
            } else {
               return "Scissors";
            }
           };
           //console.log(getComputerChoice());
   
           function getHumanChoice(choice) {
            if (choice.toLowerCase() === 'rock') {
               return 'rock';
            } else if (choice.toLowerCase() === 'paper')  {
               return 'paper';
            } else if (choice.toLowerCase() === 'scissors')  {
               return 'scissors';
            } else {
               return 'we only do rock or paper or scissors here'
            }
           }
           //console.log(getHumanChoice('RocK'))
   
           let humanScore = 0;
           let computerScore = 0;
   
           function playRound (humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
               return 'tie';
            } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
               return 'rock crushes scissors';
               humanScore++;
            } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
               return 'scissors cuts paper';
               computerScore++;
            } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
               return 'rock crushes scissors';
               computerScore++;
            } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
               return 'scissors cuts paper';
               humanScore++;
            } else if (humanChoice === 'rock' && computerChoice === 'paper') {
               return 'paper covers rock';
               computerScore++;
            } else if (humanChoice === 'paper' && computerChoice === 'rock') {
               return 'paper covers rock';
               humanScore++;
            } 
           }
   
           //const humanSelection = getHumanChoice(choice);
           const computerSelection = getComputerChoice();
   
           playRound(getHumanChoice('rock'), computerSelection);*/