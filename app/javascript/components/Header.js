import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = ()=>{
  const links = [
    {
      text: 'Home',
      path: '/',
      id: 0,
    },
    {
      text: 'Greeting',
      path: '/greeting',
      id: 1,
    }
  ];
  return (
    <header className="">
      <a href="/" className="">Greetings</a>

      <nav>
        <ul className="">
          {
          links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="">{link.text}</NavLink>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  )
}

export default Header
