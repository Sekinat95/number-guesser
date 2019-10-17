/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

    //UI elements
    const UIgame = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message')

  //assign UI min and max
  minNum.textContent = min;
  maxNum.textContent = max;
//play again event LIstener
UIgame.addEventListener('mousedown', function(e){
  console.log(1)
  if(e.target.className === 'play-again'){
    window.location.reload()
  }
})
  //listen for guess
  guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)
    console.log(guess)

    //validate
    if(isNaN(guess) || guess<min || guess > max){
      setMessage(`please enter a number between ${min} and ${max}`, 'red')
    }else if(guess===winningNum){
     
  gameOver(true, `${winningNum} is correct, YOU WIN!`)
}else{
  //if wrong
  guessesLeft -= 1;
  if(guessesLeft===0){
   gameOver(false,`GAME OVER, you lost. the correct number was ${winningNum}`)
  }else{
    //game continues - answer wrong
    guessInput.style.borderColor = 'red';
    //clear input
    guessInput.value = '';
    
    //tell user its the wrong number
    setMessage(`${guess} is wrong, ${guessesLeft} guesses left`, 'red')
   
  }
}
    

    
    

  })
//GAME OVER - **so we dont repeat ourselves
function gameOver(won, msg){
let color;
won === true ? color ='green': color ='red';
  guessInput.disabled = true;
  //change border to green
  guessInput.style.borderColor = color;
  //let user know that they won
  setMessage(msg,color)
  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'
}

  function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg
  }
  function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }