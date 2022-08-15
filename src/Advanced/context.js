import React,{useEffect,useState,useContext} from 'react';
//export default React.createContext();
const MyContext = React.createContext();
//export default MyContext

export const useCustomHook=()=>{
const context1=useContext(MyContext)
return context1;
}
export default MyContext



//const MyContext = React.createContext();
//<MyContext.Provider value={{ data:someState,data1: customState}}>
//<MyContext2.Provider>
//{props.children}
//</MyContext2.Provider>
//</MyContext.Provider>