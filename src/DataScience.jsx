import React from 'react'
import './cards.css'


// function to create card structure for DataScience
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

const DataScience = () => {
  
//Data for cards
  const blog1 = {title:"Roles and Responsibilities of a Data Scientist", views:"7360", src:"https://www.slideegg.com/image/catalog/300567-Data-Scientist-Roles-And-Responsibilities.png", author:"By Jaishree Tomar", date:"16 Apr, 2024", duration:"6 Min Read"};
  const blog2 = {title:"Top 10 Most Used Data Science Tools in 2024", views:"1744", src:"https://www.pragmaticinstitute.com/resources/wp-content/uploads/sites/6/2024/02/AI-Prompts-for-Data-Scientists.png", author:"By Isha Sharma", date:"22 Mar, 2024", duration:"4 Min Read"};
  const blog3 = {title:"Neural Network Skills to Succeed in Data Science", views:"1572", src:"https://cdn.analyticsvidhya.com/wp-content/uploads/2021/08/66565What-is-an-Artificial-Neural-Networks.jpeg", author:"By admin", date:"29 Jul, 2024", duration:"4 Min Read"};

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

export default DataScience