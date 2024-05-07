import React from 'react'
// import OffCanvas from './offCanvas'

export default function Navbar({width, setWidth}) {
    
    // setWidth(true)
    function settingWidth(){
       if(width === false){
        setWidth(true)
       }else{
        setWidth(false)
       }
    }
  return (
    <div style={{backgroundColor:'white', position:'fixed', top:'0', width:'100%'}}>
        <nav  class="navbar" >
  <div class="Maincontainer-fluid w-100 d-flex align-items-center flex-nowrap justify-content-between">
    <div className="rightSide d-flex align-items-center ps-lg-5 ps-sm-1">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" onClick={()=> settingWidth()}><i style={{fontSize:'25px'}} class="bi bi-list"></i></button>
   
    <h1 class="navbar-brand ms-lg-5 ms-sm-1 ">Circle <span style={{fontWeight:'700'}} >Soft</span></h1>
    </div>
    <form class="d-flex" role="search">
    <div  className="searchBox d-flex align-items-center">
      {/* <div style={{color:'black'}}><i class="bi bi-search"></i></div> */}
      <input class="form-control  border-0 " type="search" placeholder="🔍   Search..." aria-label="Search"/>
      {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </div>
    </form>
      <button style={{backgroundColor:'#f7f7f7', borderRadius:"8px", position:'relative'}} className='notificationBtn btn border-0 me-lg-5 me-sm-1 '><i class="bi bi-bell"></i>
      <div style={{position:'fixed', width:'5px', height:'5px', backgroundColor:'red', borderRadius:'50%', top:'25px', right:'62px'}}></div></button>
  </div>
  {/* <OffCanvas/> */}
</nav>
    </div>
  )
}
