import "./Product.css";  
import Price from "./Price.jsx"; 

 
function Product ({ title, idx }) {
  let oldPrice = ["23,323", "3,093","6,324", "9,000"]
  let newPrice = ["9,322", "3,230", "3,232", "4,000"]
  let description = [
    ["4,500 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for ipad Pro"], 
    ["designed for ipad Pro", "intuitive surface"],
    ["wireless", "optical orientation for new "],
  ]; 

    return (
    <div className ="Product" >
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
       <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />

    </div>
  );
}



export default Product
