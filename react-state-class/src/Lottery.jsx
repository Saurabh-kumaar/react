import { useState } from "react";
import { getTicket, sum } from "./helper.js"; 
import  "./Lottery.css";  
import Ticket from "./Ticket"

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

function Count({ n=3, winningSum=15 }) { 
  const [ticket, setTicket] = useState(getTicket(n)); 
  let isWinnig = sum(ticket) === winningSum;  

  let buyTicket = () => {
    setTicket(getTicket(n)); 
  }

  return ( 
     <div>
      <h1>Lottery-Game</h1>
       <Ticket ticket={ticket}/> 
       <br />
       <button onClick={buyTicket}>Buy New Ticket</button>
       <h3>{isWinnig && "Congratulations, you won!"}</h3>
     </div>
  )
}ad alkdjf 

export default Count;

