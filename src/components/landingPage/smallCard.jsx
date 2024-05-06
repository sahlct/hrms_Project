import React from 'react'

export default function SmallCard() {
  return (
    <div className='d-flex justify-content-around flex-wrap row-gap-3' style={{marginTop:'67px', paddingTop:'30px'}}>
        <div style={{maxWidth:'300px', minWidth:'250px', border:'1px solid #eceef6',height:'150px', padding:'30px 40px', backgroundColor:'white'}} className="smCard_Container d-flex flex-column align-items-start rounded-2">
            <div className='d-flex gap-4'>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Total Employees</h5>
                <div style={{backgroundColor:'#def6da', color:'#18910e', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>10.0 %</div>
            </div>
            <h2>856</h2>
            <p style={{fontSize:'15px'}}>Employee</p>
        </div>
        <div style={{maxWidth:'300px', minWidth:'250px',  border:'1px solid #eceef6',height:'150px', padding:'30px 40px', backgroundColor:'white'}} className="smCard_Container d-flex flex-column align-items-start rounded-2 ">
            <div className='d-flex gap-4'>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Job view</h5>
                <div style={{backgroundColor:'#def6da', color:'#18910e', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>22.0 %</div>
            </div>
            <h2>3342</h2>
            <p style={{fontSize:'15px'}}>viewers</p>
        </div>
        <div style={{maxWidth:'300px', minWidth:'250px',  border:'1px solid #eceef6',height:'150px', padding:'30px 40px', backgroundColor:'white'}} className="smCard_Container d-flex flex-column align-items-start rounded-2 ">
            <div className='d-flex gap-4'>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Job Applied</h5>
                <div style={{backgroundColor:'#def6da', color:'#18910e', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>12.0 %</div>
            </div>
            <h2>77</h2>
            <p style={{fontSize:'15px'}}>Applicants</p>
        </div>
        <div style={{maxWidth:'300px', minWidth:'250px',  border:'1px solid #eceef6',height:'150px', padding:'30px 40px', backgroundColor:'white'}} className="smCard_Container d-flex flex-column align-items-start rounded-2 ">
            <div className='d-flex gap-4'>
                <h5 style={{fontSize:'15px', fontWeight:'700'}}>Resign Employee</h5>
                <div style={{backgroundColor:'#f6dada', color:'#cd293c', fontWeight:'700', fontSize:'14px'}} className='percentage ps-2 pe-2 rounded-4 d-flex align-items-center '>7.0 %</div>
            </div>
            <h2>17</h2>
            <p style={{fontSize:'15px',}}>Employee</p>
        </div>
    </div>
  )
}
