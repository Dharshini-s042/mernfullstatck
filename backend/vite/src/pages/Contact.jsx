import React from 'react'

const Contact = () => {
const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev)=>({
        
        ...prev, [name]: value }));
  }
  return ( 
    <div>Contact</div>
  )
}
 
export default Contact