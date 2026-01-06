import { useState } from "react";
import { getTicket } from "./helper.js"; 
import  "./Lottery.css";  

// ================== 1st way ================== 
// function App() {
//   const [number, setNumber] = useState(generateNumber());

//   return (
//     <div> 
//       <h1>Lottery</h1>
//       <p>Pick 3 numbers between 0 and 9</p>
//       <div style={{border: "2px solid white", borderRadius: "10px"}}>
//         <h3>{number}</h3>
//       </div>
//     </div>
//   )
// } 




// ========================== 2nd way ====================  

function Count() { 
  const [ticket, setTicket] = useState(getTicket(3));
  return (
    <div>
      <h1>Lottery-Game</h1>
      <div className="ticket"> 
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
       </div>
    </div>
  )
}

export default Count;


