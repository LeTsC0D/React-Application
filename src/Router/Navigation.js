import React from 'react'
import {Link, Routes, Route,NavLink} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Root</Link>
        </li>
        <li>
        {/*replace*/}
          <Link to="/home"  >Home</Link>
        </li>
        <li>
        {/*reloadDocument*/}
          <Link to="/blogs" >Blogs</Link>
        </li>
        <li>
          <NavLink to="/navlink" style={({isActive})=>
          isActive ? {color:"green"} : {color:"red"}
         }>NavLink has by Default active class</NavLink>
        </li>
        <li>
          <NavLink to="/navlinkcss" className={({isActive})=>
          isActive ? "isActive": "isInActive"
         }>NavLink access the index.css to get css style</NavLink>
        </li>
        <li>
          <NavLink to="/navlinkcss" >
          {
          ({isActive})=>isActive ? "isActive": "isInActive"
          }
          NavLink access the index.css to get css style using CALLBACK
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
