
function handleClick(event) {
  console.log("hello bro");
  console.log(event); 
}
 
function handMouseOver() {
  console.log("goodbye bro"); 
}
 
function handledblClick() {
  console.log("clicked by double")
}; 

  
 function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handMouseOver}>
        this Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Sed 
        voluptatibus consectetur quo delectus 
        unde voluptate nihil tempora dolorem 
        quae fugit.parah if for event demo
      </p>
        <button onDoubleClick={handledblClick}>Double Click me!</button>  
    </div>
  )
}


export default Button; 

