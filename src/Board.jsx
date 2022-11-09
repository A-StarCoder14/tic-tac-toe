import React, {useState} from 'react'

import "./board.css"


export const Board = () => {
    const [turn, setTurn] = useState("X")
    const [cells,setCells] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState("")

   
    const winnerCheck = (squares) => {
        let combos = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]

            for (let i = 0; i < combos.length; i++){
                let [x,y,z] = combos[i]
                console.log(x,y,z)
                if(squares[x] && squares[x] === squares[y] && squares[y] === squares[z]){
                    setWinner(squares[x])
                }

            }

        }


  const handleClick = (num) => {
   
   if(cells[num] !== ""){
    alert("Already Clicked!")
    return
   }
   
    let squares = [...cells]
    if(turn === "X"){
        squares[num] = 'X'
        setTurn("O")
    }else{
        squares[num] = "O"
        setTurn("X")
    }

    winnerCheck(squares)
    if(winner) return victoryReset();
    setCells(squares)
  }

    const victoryReset = () => {
        setCells(Array(9).fill(""))
        setTurn("X")
        setWinner("")
    }

  
  const Cell = ({num}) => {
    return (
        <td onClick={()=> handleClick(num)}>{cells[num]}</td>
    )
  }
  
  
 return (
    <div className='container'>
        turn: {turn}
        <table>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        {
            winner && (
                <div className='btnContainer'>
                <p>{winner} is the Winner!</p>
                <button className='btn' onClick={victoryReset}>Restart</button>
                </div>
            )
        }
    </div>
  )
}