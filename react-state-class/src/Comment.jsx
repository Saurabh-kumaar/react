import {useState} from 'react';

export default function Comment() { 
  let [comments, setComments] = useState([
    {
      username: "@Aura+", 
      remarks: "it's great job!", 
      rating: 4, 
    }
  ])

  return (
    <div>
      <h2>Hello ji</h2> 
      <div className='comment'>
        <span>{comments[0].remarks}</span>
        &nbsp; 
        <span>(rating = {comments[0].rating})</span>
        <p>- {comments[0].username}</p>
      </div>
    </div>
  )
}


