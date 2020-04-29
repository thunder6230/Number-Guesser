//ui elements
const inputNum = document.querySelector('#inputNum')
const playBtn = document.querySelector('#playBtn')
const answer = document.querySelector('#answer')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')

//game values
const min = Math.floor(Math.random() * 10 + 1)
const max = Math.floor(Math.random() * 10 + 10)
const botNum =  Math.floor(Math.random() * (max - min + 1) + min)
minNum.innerHTML = min
maxNum.innerHTML = max
let guessLeft = 3
console.log(botNum)

playBtn.addEventListener('click', guessGame)


function guessGame() {
    const guessNum = parseInt(document.querySelector('#inputNum').value)
    
    //validate
    if(!parseInt(guessNum) || guessNum < min || guessNum > max){
        setAnswer("Please enter a number between " + min + " and " + max + "! ", 'red')
        }else if(guessNum === botNum){
            //game over - won
            gameOver(true, guessNum + " is correct, YOU WIN!")
            

        } else {
            //wrong number
            guessLeft -= 1
            
            if ( guessLeft === 0) {
                //game over - lost
                gameOver(false, "GAME OVER! The number is " + botNum)
            } else {
                //tell user the number is wrong and less or more
                if(guessNum > botNum){
                    setAnswer(guessNum + " is more! " + guessLeft + " guess left", 'red')
                    inputNum.style.borderColor = 'red'
                    inputNum.value = ""
                } else{
                    setAnswer(guessNum + " is less! " + guessLeft + " guess left", 'red')
                }
            } 
        }
}
    
function setAnswer(msg, color){
    answer.style.color = color
    answer.textContent = msg
}
function gameOver(won, msg){
    let color
    if (won === true){
        color = 'green'
    } else {
        color = 'red'
    }
    inputNum.disabled = true
    playBtn.disabled = true
    inputNum.style.borderColor = color
    answer.style.color = color
    setAnswer(msg)
    inputNum.value = ""
}
