// GAME VALUES
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);
   //Validate   
   if(isNaN(guess) || guess < min || guess > max){
       //Game over, Won
       setMessage(`Please enter a number between ${min} and ${max}`, 'green')
   }
   //Check if won
   if(guess === winningNum){
    gameOver(true, `${winningNum} is correct, You Win!`)
   } else{
       //Wrong number 
        guessesLeft -= 1;
        
        if(guessesLeft === 0){
            //Game over, lost
            gameOver(false, `Game over you lost. The correct number was ${winningNum}`)
        } else{
            // Game continues, answer wrong 
            
            //Change border color
            guessInput.style.borderColor = 'red';

            //Clear Input 
            guessInput.value = '';

            //Tell user its the wrong number 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
   }
})

//Game over 
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
        //Disable Input 
        guessInput.disabled = true;
        //Change text color
        message.style.color = color
        //Change border color
        guessInput.style.borderColor = color;
        //Display Message
        setMessage(msg)
}

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg
}