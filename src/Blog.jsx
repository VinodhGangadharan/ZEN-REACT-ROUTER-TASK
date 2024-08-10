import React from 'react'
import './cards.css'
import { Link, Outlet } from "react-router-dom";

const Blog = () => {

  return (
    <div>
      <div className="container">

        <div className="row">          
          <div className='col-lg-12'>
            
{/*Nav Bar to select blogs */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <label className="navbar-brand"><b>Blogs</b></label>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <Link id="home" className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/fullstackdevelopment">Full Stack Development</Link>
          <Link className="nav-link" to="/datascience">Data Science</Link>
          <Link className="nav-link" to="/cybersecurity">Cyber Security</Link>
      </div>
    </div>
  </div>
</nav>
          </div>
        </div>
        {/* various Blogs displayed here*/}
        <Outlet />
        {/*footer*/}
        <div className="row">          
          <div className='col-lg-12'>
          <h6>&copy;Blogs Application, Elearning Networks Pvt. Ltd.</h6>
          </div>
        </div>
      </div>
</div>
  )
}
export default Blog