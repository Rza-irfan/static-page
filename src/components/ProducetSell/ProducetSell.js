import React from 'react';
import './ProducetSell.css'
import { useState } from 'react';
function ProducetSell() {
   const [data, setData] = useState([
     { id: 'Abstract 3D', name: '32 in stock', age: 45.99, city: 20 },
     { id: 'Sarphens illustration', name: '32 in stock', age: 45.99, city: 20 },
   ]);
 
   return (
     <div className="centered-table">
      <h3>Product Sell</h3>
       <table >
       
         <thead>
           <tr >
             <th className="item" style={{padding:'10px',width:'40rem'}}>Product Name</th>
             <th className="item" style={{padding:'10px',width:'8rem'}}>Stock</th>
             <th className="item" style={{padding:'10px',width:'8rem'}}>Price</th>
             <th className="item" style={{padding:'10px',width:'8rem'}}>Total Sales</th>
           </tr>
         </thead>
         
         <tbody>
         <hr/>
           {data.map(item => (

             <tr key={item.id}>
               <td style={{textAlign:'left'}}>{item.id}</td>
               <td style={{textAlign:'centre'}}>{item.name}</td>
               <td style={{textAlign:'centre'}}>{item.age}</td>
               <td style={{textAlign:'centre'}}>{item.city}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
}

export default ProducetSell;
