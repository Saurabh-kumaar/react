
function Price({oldPrice, newPrice}) {  
  let oldStyles = {
    textDecorationLine: "line-through",
  } 
  
  let newStyles = {
    fontWeight: "bold",
  };

  let styles = {
    backgroundColor: "#e0b137", 
    height: "30.5px", 
    width: "200px",
    borderBottomLeftRadius: "17px",
    borderBottomRightRadius: "17px"
  }; 


  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newStyles}>{newPrice}</span>
     </div>
  )
}

export default Price; 



