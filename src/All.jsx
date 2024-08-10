import React from 'react'
import './cards.css'


// function to create card structure for All categories
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

const All = () => {

    //Data for cards
  const blog1 = {title:"Now Become A Full Stack Developer In 90 Days!", views:"3607", src:"https://media.hackerearth.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg", author:"By Archana", date:"21 Mar, 2024", duration:"4 Min Read"};
  const blog2 = {title:"Neural Network Skills to Succeed in Data Science", views:"1572", src:"https://cdn.analyticsvidhya.com/wp-content/uploads/2021/08/66565What-is-an-Artificial-Neural-Networks.jpeg", author:"By admin", date:"29 Jul, 2024", duration:"4 Min Read"};
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

export default All