import React from 'react'

function Square({value}) {

    function handleClick(){
        console.log('clicked!')
    }


  return (
    <div>
        <button 
         className="square"
         onClick={handleClick}
        >
            
         {value}
                
        </button>
          
    </div>
  )
}

export default Square
