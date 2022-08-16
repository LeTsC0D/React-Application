import React from 'react'
import {Link, Routes, Route,NavLink,Navigate,useNavigate} from 'react-router-dom'

export default function Navigation() {
const navigate=useNavigate();
  return (
    <nav>
      <ul>
        {/*
              <li>
                <Link target="_blank"  to={{pathname:"https://www.google.com"}}>Redirect</Link>
              </li>
        */}

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
        {
        <span onClick={()=>navigate("/plot")}>plot
        </span>
        }


        {/*
        <span onClick={()=>{
        return(
        <Navigate to="/plot"></Navigate>
        )}}>plot
        </span>
        */}
      </ul>
    </nav>
  )
}
