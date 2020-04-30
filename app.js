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
       setMessage(`Please enter a number between ${min} and ${max}`, 'green')
   }

   //Check if won
   if(guess === winningNum){
    //Disable Input 
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = 'green';
    //Display Message
    setMessage(`${winningNum} is correct, You Win!`, 'green')
   }
})

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg
}