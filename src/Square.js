import React,{useState} from 'react'

function Square({value}) {

    const [value,setValue] = useState(null);

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
