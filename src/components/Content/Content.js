import React from 'react';
import './Content.css'
function Content({rate,content,item,add}) {
   return (
      <div className="card" style={{display:'flex'}}>
         <img className="responsive-image" src={add}/>
         <div>
            <p style={{fontSize:'0.75rem',color:'grey'}} className="card-content">{item}</p>
            <h2 className="card-title">{rate}</h2>
            <p style={{fontSize:'0.85rem'}} className="card-content">{content} this month</p>
         </div>
      </div>
   );
}

export default Content;
