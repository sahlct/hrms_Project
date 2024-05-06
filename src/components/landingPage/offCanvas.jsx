import React from 'react'
import './offCanvas.css'

export default function OffCanvas() {
  // setWidth(true)
  return (
    <div>
        <div style={{marginTop:'68px'}} class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  {/* <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div> */}
  <div style={{height:'100px'}} class="offcanvas-body ps-0 pe-0">
    <div className="profileData d-flex justify-content-around align-items-center pb-4 ">
        <img style={{width:'50px', height:'50px', borderRadius:'50%'}} src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1714803705~exp=1714804305~hmac=926e935284e6f4878148f98b591a28453913d0f98800eaedd46e3e75ef3410d9" alt="" />
        <div className="profileTexts">
        <h5 className=' mb-0 '>Isac Ebraham</h5>
        <p className=' mb-0 '>HR Manager</p>
        </div>
        <button style={{backgroundColor:'#f7f7f7'}} className='btn'>• • •</button>
    </div>
   <div  class="accordion accordion-flush" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button className="accordion-button d-flex gap-5 ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><div ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-dashboard" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4h6v8h-6z" />
  <path d="M4 16h6v4h-6z" />
  <path d="M14 12h6v8h-6z" />
  <path d="M14 4h6v4h-6z" />
</svg></div>
        <div>Dashboard </div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-column p-0">
      <button>Management</button>
      <button>Upload</button>
      <hr />
      <button>File Types</button>
      <button>Approval</button>
      </div>
    </div>
  </div>
  <div class="accordion-item">
  <h2 class="accordion-header">
    <button class="accordion-button collapsed d-flex gap-5 ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      <div><i class="bi bi-person-vcard" style={{fontSize:'25px'}}></i></div>
      <div>Employee</div>
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    <button>Management</button>
       <button>Request</button>
       <hr />
       <button>Placement</button>
       <button>Employement Terms</button>
       <button>Education</button>
       <button>Experience</button>
       <hr />
       <button>Web Acoount</button>
       <button>HR Role</button>
    </div>
  </div>
</div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed d-flex gap-5 ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div><i style={{fontSize:'25px'}} class="bi bi-coin"></i></div>
        <div>Expence Claim</div>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <button>Management</button>
       <button>Review</button>
       <hr />
       <button>Transaction Report</button>
       <hr />
       <button>Catogory</button>
       <button>Type</button>
       <button>Approval Workflow</button>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed d-flex gap-5 ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <div><i style={{fontSize:'25px'}}class="bi bi-people"></i></div>
        <div>Attendence</div>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <button>Management</button>
       <button>Feild Check-in</button>
       <hr />
       <button>Time Clock Report</button>
       <button>WorkDay</button>
       <button>Holiday</button>
       <hr />
       <button>Setting</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    </div>
  )
}
