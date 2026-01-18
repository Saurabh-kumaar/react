import { useState } from "react"; 

export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "", 
    remarks: "", 
    rating: 5 
  }); 

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData); 
    addNewComment(formData);
    event.preventDefault();  
    setFormData({
      username: "", 
      remarks: "", 
      rating: 5, 
    }); 
  }; 

  return (
    <div>
      <h3>Leave a comment!</h3> 
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username &nbsp;</label>
        <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/> 
        <br /><br />

        <label htmlFor="remarks">Remarks &nbsp;</label>
        <textarea value={formData.remarks} placeholder="add new remaks" onChange={handleInputChange} id="remarks" name="remarks" ></textarea>
        <br /> <br />

        <label htmlFor="rating">Rating &nbsp; </label>
        <input placeholder="rating" value={formData.rating} onChange={handleInputChange} id="rating" type="number" min={1} max={5} name="rating" /> 
        <br /><br />
        <button>Submit</button>

      </form>
    </div>
  )
}


