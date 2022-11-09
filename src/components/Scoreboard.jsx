import React from 'react'
import "./scoreboard.css"

export const Scoreboard = ({scores, playerX}) => {
  
  const {xScores, oScores} = scores
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!playerX && 'inactive'}`}>X - {xScores}</span>
        <span className={`score o-score ${playerX && 'inactive'}`}>O - {oScores}</span>
    </div>
  )
}
