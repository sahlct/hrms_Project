import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav style={{backgroundColor:'white'}} class="navbar">
  <div class="container-fluid d-flex align-items-center flex-nowrap">
    <div className="rightSide d-flex align-items-center ">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i style={{fontSize:'25px'}} class="bi bi-list"></i></button>
    <h1 class="navbar-brand ms-lg-5 ms-sm-1 ">Circle <span style={{fontWeight:'700'}} >Soft</span></h1>
    </div>
    <form class="d-flex" role="search">
    <div  className="searchBox d-flex align-items-center">
      {/* <div style={{color:'black'}}><i class="bi bi-search"></i></div> */}
      <input class="form-control  border-0 " type="search" placeholder="🔍   Search..." aria-label="Search"/>
      {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </div>
    </form>
      <button style={{backgroundColor:'#f7f7f7', borderRadius:"8px"}} className='notificationBtn btn border-0 me-lg-5 me-sm-1 '><i class="bi bi-bell"></i></button>
  </div>
</nav>
    </div>
  )
}
