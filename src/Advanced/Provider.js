import React,{useEffect,useState} from 'react';
import MyContext from "./context"

const Provider=(props)=>{
const [someState,setSomeState]=useState(false)
    const [customState, setCustomState] = useState({
              name:"learn context api",
              student:"1212",
              bool:"not true"
              });

return (

<MyContext.Provider value={{ data:someState,data1: customState}}>
{props.children}
</MyContext.Provider>
)
}
export default Provider


