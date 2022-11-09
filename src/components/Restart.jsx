import React from 'react'
import "./restart.css"
function Restart({gameOver, restart, reset}) {
  return (
    <div className='container'>
      
        <button onClick={() => restart()} className='btn'>Restart</button>
        <button onClick={() => reset()} className='btn reset'>Reset</button>
    </div>
  )
}

export default Restart