import React from "react";
import "./mainCard.css";

export default function MainCard() {
  return (
    <div>
      <div
        className="empContainer bg-light mt-5 ms-5 rounded-3"
        style={{ width: "100%" }}
      >
        <div className="empHeader d-flex justify-content-between p-3 align-items-center ">
          <h6 style={{fontWeight:'700', paddingLeft:'20px'}}>Employees</h6>
          <div class="dropdown">
            <button
              class="btn btn-outline-secondary dropdown-toggle d-flex justify-content-between align-items-center gap-2 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="lni lni-list"></i>filter
            </button>
            <ul class="dropdown-menu">
              <li>
                <p class="dropdown-item">Job Title</p>
              </li>
              <li>
                <p class="dropdown-item">Team Lead</p>
              </li>
              <li>
                <p class="dropdown-item">Status</p>
              </li>
            </ul>
          </div>
        </div>
           {/* <div style={{width:'100%'}}>
           <div style={{ height: "50px", borderRadius:'15px', overflow:'hidden'}} className="d-flex bg-danger ms-5 me-5 ">
            <div className=" w-25 d-flex justify-content-start " style={{padding: '10px 30px'}}>Employee Name</div>
            <div className=" w-25 d-flex justify-content-start " style={{padding: '10px 30px'}}>Job Title</div>
            <div className=" w-25 d-flex justify-content-start " style={{padding: '10px 30px'}}>Team Lead</div>
            <div className=" w-25 d-flex justify-content-start " style={{padding: '10px 30px'}}>Status</div>
            </div>
            </div> */}
        <table className="w-100">  
          <thead style={{backgroundColor:'#a5b4fc'}}>
            <tr style={{ height: "50px", borderRadius:'10px', overflow:'hidden'}}>
              <th>Employee Name</th>
              <th>Job Title</th>
              <th>Team Lead</th>
              <th>Status</th>
            </tr>
          </thead>        
          <tbody>
            <tr style={{ height: "50px" }}>
              <td>Afsal</td>
              <td>Cyber Security</td>
              <td>Anand Saayi</td>
              <td>Sick Leav</td>
            </tr>
            <tr style={{ height: "50px" }}>
              <td>Meghah</td>
              <td>ui/ux Designer</td>
              <td>John Samual</td>
              <td>Active</td>
            </tr>
            <tr style={{ height: "50px" }}>
              <td>Salman</td>
              <td>React Dev</td>
              <td>John Samual</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
        <div className="empFooter d-flex justify-content-between align-items-center ">
          <p style={{ height: "50px", fontSize: "14px", color: "grey"}} className="d-flex align-items-center mb-0">
            Showing 1 to 3 of 45 Entries
          </p>
          <div className="d-flex gap-3">
            <div className="counts">1</div>
            <div className="counts">2</div>
            <div className="counts">3</div>
            <div className="counts"><i class="lni lni-line-dotted"></i></div>
            <div className="counts">15</div>
            <button className="btn btn-outline-secondary d-flex align-items-center" style={{height:'25px'}}>Next</button>
          </div>
        </div>
      </div>

      {/* <div style={{width:'500px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px', backgroundColor:'rgb(231 105 105)'}} className="headSection d-flex align-items-center justify-content-center fw-semibold ">Alerts</div>
            <div className="bodySection mt-4 d-flex flex-column align-items-start ps-5 ">
                <p>Leave </p>
                <p>end of Probation</p>
                <p>end of Contract</p>
                <p>Legal Documentry Expiry</p>
                <p>Salary Review</p>
            </div>
        </div> */}
      {/* <div style={{width:'350px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px'}} className="headSection bg-primary d-flex align-items-center justify-content-center fw-semibold ">Discussion</div>
            <div className="bodySection mt-4 d-flex flex-column align-items-start ps-5 ">
                <p>Create the First Descussion</p>
                <p>Edit the tha Discussions</p>
                <p>Delete the Discussion Datas</p>
            </div>
        </div> */}
      {/* <div style={{width:'350px', border:'2px solid #eceef6'}} className="mainCard_Container">
            <div style={{color:'white',height:'40px'}} className="headSection bg-primary d-flex align-items-center justify-content-center fw-semibold ">HR Newses</div>
            <div className="bodySection mt-4 d-flex flex-column align-items-start ps-5 ">
                <p>Versions</p>
                <p>Coming Soon</p>
                <p>Testimonial</p>
                <p>Quastions & Suggestions</p>
                <p>Freeware me</p>
            </div>
        </div> */}
    </div>
  );
}
