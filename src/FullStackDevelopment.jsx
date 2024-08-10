import React from 'react'
import './cards.css'


// function to create card structure for FullStackDevelopment
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

const FullStackDevelopment = () => {

  //Data for cards
  const blog1 = {title:"Top 10 Full-Stack Developer Frameworks in 2024", views:"11341", src:"https://www.fullstackdevteams.com/blog/wp-content/uploads/2022/01/Top-10-Trending-Full-Stack-Frameworks-4-1-1200x900.png", author:"By Isha Sharma", date:"16 Apr, 2024", duration:"5 Min Read"};
  const blog2 = {title:"6 Essential Prerequisites For Learning ReactJS", views:"10084", src:"https://blog.logrocket.com/wp-content/uploads/2022/12/how-to-use-svgs-react.png", author:"By RamKumar", date:"25 Mar, 2024", duration:"3 Min Read"};
  const blog3 = {title:"Now Become A Full Stack Developer In 90 Days!", views:"3607", src:"https://media.hackerearth.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg", author:"By Archana", date:"21 Mar, 2024", duration:"4 Min Read"};

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

export default FullStackDevelopment