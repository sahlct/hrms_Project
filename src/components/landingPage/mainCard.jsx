import React from 'react'

export default function MainCard() {
  return (
    <div className='d-flex justify-content-center align-items-start gap-5 flex-wrap mt-5'>
        <div style={{width:'500px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px'}} className="headSection bg-primary d-flex align-items-center justify-content-center fw-semibold ">Alerts</div>
            <div className="bodySection mt-4 d-flex flex-column align-items-start ps-5 ">
                <p>Leave </p>
                <p>end of Probation</p>
                <p>end of Contract</p>
                <p>Legal Documentry Expiry</p>
                <p>Salary Review</p>
            </div>
        </div>
        <div style={{width:'500px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px'}} className="headSection bg-primary d-flex align-items-center justify-content-center fw-semibold ">Discussion</div>
            <div className="bodySection mt-4">
                <p>Create the First Descussion</p>
                <p>Edit the tha Discussions</p>
                <p>Delete the Discussion Datas</p>
            </div>
        </div>
        <div style={{width:'500px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px'}} className="headSection bg-primary d-flex align-items-center justify-content-center fw-semibold ">Alerts</div>
            <div className="bodySection mt-4">
                <p>first line</p>
                <p>second line</p>
                <p>third line</p>
                <p>fourth line</p>
                <p>fifth line</p>
                <p>sixth line</p>
            </div>
        </div>
        <div style={{width:'500px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px'}} className="headSection bg-primary d-flex align-items-center justify-content-center fw-semibold ">Alerts</div>
            <div className="bodySection mt-4">
                <p>first line</p>
                <p>second line</p>
            </div>
        </div>
        <div style={{width:'500px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px'}} className="headSection bg-primary d-flex align-items-center justify-content-center fw-semibold ">Alerts</div>
            <div className="bodySection mt-4">
                <p>first line</p>
                <p>second line</p>
                <p>third line</p>
            </div>
        </div>
    </div>
  )
}
