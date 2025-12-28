import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>This is userlist!</h1>
        <p>user {params.userid}</p>
        <p>user 2</p>
        <p>user 3</p>
        <p>user 4</p>
        <p>user 5</p>
        <p>user 6</p>
    </div>
  )
}

export default page

export function generateMetadata(){
  return{
    title: {
       default: 'maam magic',
    },
    description:"hello weord!",
  }
}