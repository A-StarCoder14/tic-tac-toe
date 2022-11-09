import React from 'react'
import {Box} from "./Box"
import "./board.css"

function Board({board, onClick}) {
  return (
    <div className='board'>
        {
            board.map((value, index) => {
                return (
                    <Box value={value} key={index} onClick={()=>onClick(index)} />
                )
            })
        }
       
    </div>
  )
}

export default Board