import { useEffect, useRef, useState } from "react";


const ReverseCounter = () => {

  const [text, setText] = useState(0);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  let key = useRef();
  useEffect(() => {
    if(count > 0){
    key.current = setInterval(() => {
      setCount(prevCount => prevCount-1);
    }, 1000)
  }
    },[flag]);

  useEffect(() => {
      if(count < 0){
        setCount(0);
        clearInterval(key.current);
      }
      },[count]);

  return (
    <div className="App">
      <h1>Hello CoeSadbox</h1>
      <input type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}/>
      <button onClick={() => {
        clearInterval(key.current);
        setCount(parseInt(text,10));
        setFlag(!flag);}}>
          Countdown</button>
      <br />
      <br />
      {count}
    </div>
  );
}

export default ReverseCounter;