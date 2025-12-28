import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <p>User Registration page :{params.userid} </p>      
      <p>dinamic roututin:{params.userid}</p>
    </div>
  )
}

export default page