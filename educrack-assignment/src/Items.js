import { useState } from 'react';


const Items= (props) =>{
    const [Name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setdate] = useState("");
  const [cost, setcost] = useState("");
  
  const disableThebtn = () =>
    Name.trim() === "" ||
    price.trim()==="" ||
    date.trim()===""||
    cost.trim()===""
   
       return(
       
        <div className="info">
            <button onClick={props.logoutHandler}>Log Out</button>
        
        <h3 className="heading"> Add Details of Item </h3>
        <div className="rows">
        <label for="title"><b>name</b></label>   
    <br></br>
   <input className="field"placeholder="name" type="text" onChange={(e) => setName(e.target.value)}>
   </input>
   </div>
   <div className="rows">
   <label for="price"><b>Rent price</b></label> 
    <br></br>
   <input className="field"placeholder="Rent price" type="number" onChange={(e) => setPrice(e.target.value)}>
   </input>
   </div >
   <div className="rows">
   <label for="Manufacture Date"><b>Manufacture Date</b></label> 
   <br></br>
   <input className="field" placeholder="Date" type="date" onChange={(e) => setdate(e.target.value)}>
   </input>
   </div>
   <div className="rows">
   <label for="cost"><b>Actual Cost</b></label> 
   <br></br>
   <input className="field" placeholder="cost" type="number" onChange={(e) => setcost(e.target.value)}>
   </input>

  </div>
  
   <div><button className="upload" onClick={() => props.AddInfoHandler(Name, price, date, cost)} disabled={disableThebtn()}><b>Upload Details</b></button></div>
    </div>
    );
}
export default Items;