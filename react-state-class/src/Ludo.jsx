import { useState } from "react"; 

function Ludo() {   
  let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0 }); 

  let updateBlue = () => {
    console.log(`moves.blue = ${moves.blue}`); 
    setMoves(( preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 }; 
    }); 
  };  

   let updateYellow = () => {
    console.log(`moves.yellow = ${moves.yellow}`); 
    setMoves(( preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 }; 
    }); 
  }; 

  let updateGreen = () => {
    console.log(`moves.green = ${moves.green}`); 
    setMoves(( preMoves) => {
      return { ...preMoves, green: preMoves.green + 1};  
    });
  };

  return (
  <div>
    <p style={{ fontSize: "24px", fontWeight: "bold"}}>Counter Game!</p>
    <div className="board" style={{ height: "400px", width: "300px", border: "2px solid black", padding: "20px"}}>
      <p>Blue Moves = {moves.blue} </p>
      <button style={{ backgroundColor: "blue"}} onClick={updateBlue}>+1</button> 
      <p>Yellow Moves = {moves.yellow } </p>
      <button style={{ backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button> 
      <p>Green Moves = {moves.green} </p>
      <button style={{ backgroundColor: "green"}} onClick={updateGreen}>+1</button> 
      <p>Red Moves = {moves.red} </p>
      <button style={{ backgroundColor: "red"}}>+1</button> 
    </div>
  </div>
  );
}
 

export default Ludo;
