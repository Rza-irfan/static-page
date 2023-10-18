import React from 'react';
import './Sidebar.css'
function Sidebar() {
   const sidebarStyle = {
     
      width:'200px',
      border: '2px solid black',
      height:'100%',
      backgroundColor:'#091d40'
   };
 
   const listStyle = {
     listStyle: 'none',
     padding: 30,
   };
 
   const itemStyle = {
     marginBottom: '10px',
     padding:'10px'
   };
 
   const linkStyle = {
     textDecoration: 'none',
     color: 'white',
     fontSize: '16px',
   };
 
   return (
     <div style={sidebarStyle}>
      <div>
         <h1 style={{color:'white',textAlign:'center'}}>Dashboard</h1>
      </div>
      <div>
         <ul style={listStyle}>

            <li style={itemStyle}>
            <a style={linkStyle} href="/">Dashboard</a>
            </li>
            <li style={itemStyle}>
            <a style={linkStyle} href="/about">Product</a>
            </li>
            <li style={itemStyle}>
            <a style={linkStyle} href="/services">Customers</a>
            </li>
            <li style={itemStyle}>
            <a style={linkStyle} href="/contact">Income</a>
            </li>
            <li style={itemStyle}>
            <a style={linkStyle} href="/contact">Promote</a>
            </li>
            <li style={itemStyle}>
            <a style={linkStyle} href="/contact">Help</a>
            </li>
         </ul>
      </div>   
      <div style={{backgroundColor:"#091d50",marginTop:'5rem'}}>
         <p style={{color:'white',fontSize:'1rem'}}>Rakesh Sharma</p>
         <p style={{color:'grey',fontSize:'0.75rem'}}>Manager</p>
      </div>
     </div>
   );
 }
export default Sidebar;
