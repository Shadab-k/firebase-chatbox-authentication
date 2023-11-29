import React from 'react'

const Home = (props) => {
  return (
    <div>
    <br /> 
    <br />
    <br />
    <h2>{props.name ? `Welcome - ${props.name}` : "LogIn Please"}</h2>
    </div>
  )
}

export default Home
