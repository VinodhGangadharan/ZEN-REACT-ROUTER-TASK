import React from 'react'
import './cards.css'


// function to create card structure for CyberSecurity
function Card(props)
{
  let align ={textAlign:"right"};
  return (
    <>
<div className="col-lg-4">         
         <div className="card" >
         <img src={props.value.src} className="card-img-top" alt="..."/> 
 <div className="card-body">
   <h5 className="card-title">{props.value.title}</h5>
   <hr></hr>
   <table style={{ width: "100%"}}>
    <tbody>
    <tr>
      <td>
<p>
{props.value.author}
</p>
<p>
{props.value.date}
</p>
      </td>
      <td id="align" style={{ textAlign: 'right' }}>
        {props.value.duration}
      </td>
    </tr>
    </tbody>
   </table>
 </div>
</div>      
         </div>

    </>
  )
}

const CyberSecurity = () => {

  //Data for cards
  const blog1 = {title:"What Is Hacking? Types of Hacking & More", views:"4091", src:"https://www.techfunnel.com/wp-content/uploads/2022/02/types-of-hackers.jpg", author:"By Megahna D", date:"25 Mar, 2024", duration:"6 Min Read"};
  const blog2 = {title:"How Is Cyber Security Important To Our Lives?", views:"1535", src:"https://dcblog.b-cdn.net/wp-content/uploads/2023/08/What-is-Cybersecurity-Importance-of-CyberSecurity.jpeg", author:"By RamKumar", date:"29 Apr, 2024", duration:"2 Min Read"};
  const blog3 = {title:"Cybersecurity vs Artificial Intelligence | Better Career", views:"6047", src:"https://cdn.shopaccino.com/igmguru/articles/AI-vs-Cybersecurity.png?", author:"By admin", date:"16 Apr, 2024", duration:"2 Min Read"};

  return (
    <div >
    <div className="container">
      <div className='row'>
<div className='col-lg-12'>
</div>
      </div>
      <div className ="row justify-content-around">                
      <Card value={blog1}/>
      <Card value={blog2}/>
      <Card value={blog3}/>
      </div>
    </div>
  </div>
  )
}

export default CyberSecurity