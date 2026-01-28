import React from 'react'

const Child = ({send}) => {
  return (
    <div>
        <button on onClick={()=>send("hello child")}>send data to parent</button>
    </div>
  )
}

export default Child