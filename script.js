//global variables
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

//Winning combination
const WINNING_COMBO = [
    [0,1,2],[3, 4, 5], [6, 7, 8],
    [0,3,6],[1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]


//Array of [data-cell]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById(['board'])
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')


let circleTurn

startGame()

restartButton.addEventListener('click', startGame)


function startGame(){
    winningMessageElement.classList.remove('show')
    circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener("click", handleClick, {once: true})})
    setBoardHover()
}


function handleClick(e){
  const clickedCell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS  
    placeMark(clickedCell, currentClass)
    console.log(clickedCell.classList)
    if(checkWin(currentClass)){
        endGame(false)
    } else if(isDraw()){
        endGame(true)
    }else{
        swapTurns()
        setBoardHover()
    }
    //Check for lose
   
}

    function endGame(draw){
        if(draw){
            winningMessageTextElement.innerText = "Nobody Wins! Press restart and play again!"
        }else{
            winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Win!`
        }
        winningMessageElement.classList.add('show')
    }

    function isDraw(){
      return  [...cellElements].every(cell => {
          return  cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
        })
    }



  function placeMark(clickedCell, currentClass){

    clickedCell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHover(currentClass){
    board.classList.remove(CIRCLE_CLASS)
    board.classList.remove(X_CLASS)
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
    return WINNING_COMBO.some(combo => {
        return combo.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}