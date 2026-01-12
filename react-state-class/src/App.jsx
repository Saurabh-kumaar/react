 
import './App.css' 
import Counter from "./Counter.jsx" 
// import LikeButton from './LikeButton.jsx';
import Ludo from "./Ludo.jsx";  
import TodoList from "./TodoList.jsx"; 
import Lottery from "./Lottery.jsx"; 
import Ticket from "./Ticket"; 


function App() {  
  return (
    <>  
    <Lottery  n={3} winningSum={15} />
  
    {/* <TodoList /> */}
    {/* // <Ludo />  */}
     </>
  )
}


export default App;

//===================


