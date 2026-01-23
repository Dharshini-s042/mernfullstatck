import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <h3>useState Example</h3>
        <h5>Count:{count}</h5>
        <button onClick={()=> setCount(prev=>prev+1)}>Increase</button>
        <button onClick={()=> like(prev=>prev-1)}>decrease</button>
    </div>
  )
}

export default State