import React,{useEffect,useState,useContext} from 'react';
//export default React.createContext();
const MyContext = React.createContext();
//export default MyContext
//const context1=useContext(MyContext);

export const useCustomHook=()=>{
const context1=useContext(MyContext)
return context1;
}
export default MyContext

//export default {MyContext,useCustomHook}


//const MyContext=()=>React.createContext();
//
//export default MyContext;