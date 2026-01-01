import { useState } from "react" ; 

function Counter() { 
  let [ count, setCount]  = useState(0); 
 
  let incCount = () => {
    setCount(count + 1);  
   }

  return (
    <div>
      <h2>Count = {count }</h2>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )
} 

export default Counter;
