import React from 'react'
import { NavLink } from 'react-router-dom';

const Home =()=>{
  return (
    <div class="">
      <p className="">Welcome To Hello Rails React App</p>
      <NavLink to="/greeting" className="">Goto Greeting</NavLink>
    </div>
  )
}

export default Home
