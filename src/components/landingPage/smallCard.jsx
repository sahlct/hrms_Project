import React from 'react'

export default function SmallCard() {
  return (
    <div class="container" style={{marginTop:'67px', paddingTop:'30px'}}>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 gap-4 justify-content-center" >
  <div class="col rounded-3 p-0 overflow-hidden" style={{maxWidth:'280px', minWidth:'250px',border:'2px solid grey'}}>
      <div class="ps-4 pt-3 pe-4 bg-light" style={{height:'120px'}}>
      <div className='d-flex gap-4 justify-content-between '>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Job view</h5>
                <div style={{backgroundColor:'#def6da', color:'#18910e', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>22.0 %</div>
            </div>
            <h2>3342</h2>
            <p style={{fontSize:'15px'}}>viewers</p>
      </div>
    </div>
    <div class="col rounded-3 p-0 overflow-hidden" style={{maxWidth:'280px', minWidth:'250px',border:'2px solid grey'}}>
      <div class="ps-4 pt-3 pe-4 bg-light" style={{height:'120px'}}>
      <div className='d-flex gap-4 justify-content-between '>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Job Applied</h5>
                <div style={{backgroundColor:'#def6da', color:'#18910e', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>12.0 %</div>
            </div>
            <h2>77</h2>
            <p style={{fontSize:'15px'}}>Applicants</p>
      </div>
    </div>
    <div class="col rounded-3 p-0 overflow-hidden" style={{maxWidth:'280px', minWidth:'250px',border:'2px solid grey'}}>
      <div class="ps-4 pt-3 pe-4 bg-light" style={{height:'120px'}}>
      <div className='d-flex gap-4 justify-content-between '>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Hiring</h5>
                <div style={{backgroundColor:'#def6da', color:'#18910e', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>48.0 %</div>
            </div>
            <h2>442</h2>
            <p style={{fontSize:'15px'}}>viewers</p>
      </div>
    </div>
    <div class="col rounded-3 p-0 overflow-hidden" style={{maxWidth:'280px', minWidth:'250px',border:'2px solid grey'}}>
      <div class="ps-4 pt-3 pe-4 bg-light" style={{height:'120px'}}>
      <div className='d-flex gap-4 justify-content-between '>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Resigns</h5>
                <div style={{backgroundColor:'#def6da', color:'#18910e', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>7.0 %</div>
            </div>
            <h2>17</h2>
            <p style={{fontSize:'15px'}}>Employee</p>
      </div>
    </div>
  </div>
     </div>
  )
}
