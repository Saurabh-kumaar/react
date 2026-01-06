
// ------------- 1st ------------ 
// function generateNumber() {
//   let num = "";

//   for(let i=0; i<3; i++) {
//     num = Math.floor(Math.random() * 1000);
//   }
//   return num;
// }

// console.log(generateNumber());
 

// --------------- 2nd ---------------- 

function getTicket(n) {
  let arr = new Array(n); 
  
  for(let i=0; i<n; i++) {
    arr[i] = Math.floor(Math.random() * 10); 
  }
  return arr;
}





export { getTicket };