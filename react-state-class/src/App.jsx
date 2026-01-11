 
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
    <Ticket ticket={[0, 1, 2]} /> 
    <Ticket ticket={[4, 2, 6, 8]} /> 
  
    {/* <TodoList /> */}
    {/* // <Ludo />  */}
     </>
  )
}


export default App;

//===================


