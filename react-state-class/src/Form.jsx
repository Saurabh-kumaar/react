import {useState} from "react"; 

export default function Form() { 
  let [fullName, setFullName] = useState("shradha"); 

  let handleNameChange = (event) => {
    console.log(event.target.value); 
  }; 

  return (
    <form>
      <label htmlFor="username">FullName &nbsp;</label> 
      <input placeholder="enter full name" 
      type="text"
      value={fullName}
      onChange={handleNameChange}
      id="username"
      /> 
      <button>Submit</button> 
    </form>
  )
}

