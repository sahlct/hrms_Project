import React from 'react'
import './offCanvas.css'

export default function OffCanvas() {
  return (
    <div>
        <div style={{marginTop:'69px'}} class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
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
   <div style={{borderRadius:'0'}} class="accordion accordion-flush" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button className="accordion-button d-flex gap-5 ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><div ><i class="bi bi-person-vcard" style={{fontSize:'25px'}}></i></div>
        <div>Employee </div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-column p-0">
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
  <div class="accordion-item w-100 ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed d-flex gap-5 ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div><i style={{fontSize:'25px'}} class="bi bi-coin"></i></div>
        <div>Expence Claim</div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed d-flex gap-5 ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div><i style={{fontSize:'25px'}}class="bi bi-people"></i></div>
        <div>Team</div>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    </div>
  )
}
