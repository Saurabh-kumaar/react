import { useState } from "react" ; 

function init() {  
  console.log("init was executed");
  return Math.random(); 
}

function Counter() { 
  let [ count, setCount]  = useState(init()); 
  console.log("component was rendered"); 
  
  let incCount = () => {  // callback
    setCount((currCount) => {
      return currCount + 1; 
    }); 
  };

  return (
    <div>
      <h2>Count = {count }</h2>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
} 


export default Counter;
