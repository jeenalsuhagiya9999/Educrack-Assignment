import React, { useState, useEffect } from 'react';
function Mainpage(){
    const [Name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [date, setdate] = useState([]);
  const [cost, setcost] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/item", { credentials: "include"  })
          .then((r) => r.json())
          .then((item) => {
              
                item.map((value,idx)=>{
                    setName(olditem=>[...olditem, item[idx].Name])
                    setPrice(olditem=>[...olditem, item[idx].price])
                    setdate(olditem=>[...olditem, item[idx].date])
                    setcost(olditem=>[...olditem, item[idx].cost])
                })
                
              
        }).catch(err=>{
            console.error(err);
        })  
      }, []);
    return(
        <div>
             <table>
           <thead>
            <tr>

                <th>Item Name</th>
                <th>Price</th>
                <th>Manufacture Date</th>
                <th>Cost</th>  
                <th>Action</th> 
            </tr>
            </thead>
            <tbody>
          {Name.map((value,idx)=>(
              <tr>
                   <td >{Name[idx]}</td>
                  <td >{price[idx]}</td>
                  <td >{date[idx]}</td>
                  <td >{cost[idx]}</td>
                  <td><button>Edit</button><button>Delete</button> </td>
              </tr>
          )
          )}
          </tbody>
        
    
            
       </table>
        </div>
    )
}
export default Mainpage;