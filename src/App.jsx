import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Restart from './components/Restart'
import { Scoreboard } from './components/Scoreboard'


function App() {

  const WIN_COMBO = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]
  
  const [board, setBoard] = useState(Array(9).fill(null))

  const [playerX, setPlayerX] = useState(true)
  
  const [scores, setScores] = useState({xScores:0, oScores:0})

  const [gameOver, setGameOver] = useState(false)

  const handleClick = (boxIndex) => {
    const updatedBoard = board.map((value, index)=> {
      if(boxIndex === index){
        return playerX ? "X" : "O";
      }else {
        return value;
      }
    })
    const winner = checkWinner(updatedBoard)

    if(winner){
      if(winner === "X"){
       let {xScores} = scores;
       xScores += 1
       setScores({...scores, xScores})
      }else{
        let {oScores} = scores;
        oScores += 1
       setScores({...scores, oScores})
      }
    }

    setBoard(updatedBoard)
    setPlayerX(!playerX)
  }
  console.log(scores)

  const checkWinner = (board) => {

    for(let i = 0; i < WIN_COMBO.length; i++){
    
        const [x,y,z] = WIN_COMBO[i];
    
    
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x]
      }
    }
    }
    
    const reset = () => {

      setGameOver(false)
      setBoard(() => Array(9).fill(null))
   
    }

    const resetScores = () => {
      setScores({
        xScores: 0,
        oScores: 0
      })
    }
    

  return (

    <div className="App">
      <Scoreboard scores={scores} playerX={playerX}/>
     <Board board={board} onClick={gameOver ? reset : handleClick}/>
     <Restart gameOver={gameOver} restart={reset} reset={resetScores}/>
    </div>
  )
}

export default App
