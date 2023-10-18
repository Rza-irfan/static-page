import React from 'react';
import './Stats.css'
const Stats = ({name,sub,add}) => (
   <div className="graph" >
      <h2 style={{fontSize:'1.25rem'}} className="card-title">{name}</h2>
      <p style={{fontSize:'0.75rem',color:'grey'}} className="card-content">{sub}</p>
      <img className="responsive-image" src={add}/>
   </div>
);
export default Stats;
