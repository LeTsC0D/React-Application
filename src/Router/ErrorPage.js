import React,{useEffect} from 'react'
import {useParams, Link,Outlet,useNavigate} from 'react-router-dom'

export default function ErrorPage() {
const navigate=useNavigate();
useEffect(()=>{
setTimeout(()=>{
/*navigate("/home",{replace:true,state:{error:"route not found"}})*/
navigate(-1,{replace:true,state:{error:"route not found"}})
}
,5000)
},[])

  return (
    <>
      <div>Error Page logs</div>
    </>
  )
}
