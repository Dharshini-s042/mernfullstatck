import React from 'react'
import { userContext } from '../App'
import { useContext } from 'react'
const Profile = ({age,skill}) => {
  const name=useContext(userContext)
  return (
    <div>
        <h1>I am {name}.My age is {age}</h1>
        <ul>
            {skill.map((skill)=>{
                return <li>{skill}</li>
        })}
        </ul>
    </div>
  )
}

export default Profile