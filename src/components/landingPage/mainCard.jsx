import React from "react";
import "./mainCard.css";

export default function EmployeeList() {
  return (
    <div className="pe-4">
      <div className="empContainer rounded-4">
        <div className="empHeader d-flex justify-content-between p-3 align-items-center ">
          <h6 style={{fontWeight:'600', paddingLeft:'20px'}}>Employees</h6>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle d-flex justify-content-between align-items-center gap-2 bg-primary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{color:'white'}}
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
        <table className="w-100">  
          <thead style={{backgroundColor:'#00b4d8'}}>
            <tr style={{ height: "50px", borderRadius:'10px', overflow:'hidden'}}>
              <th>Employee Name</th>
              <th>Job Title</th>
              <th>Team Lead</th>
              <th>Status</th>
            </tr>
          </thead>        
          <tbody>
            <tr style={{ height: "50px" }}>
            <td className="d-flex gap-3"><img style={{width:'25px', height:'25px'}} src="/assets/man.png" alt="user img" /> <div>Afsal</div></td>
              <td>Python Dev</td>
              <td>Anand Saayi</td>
              <td style={{color:'green'}}>Active</td>
            </tr>
            <tr style={{ height: "50px" }}>
            <td className="d-flex gap-3 "><img style={{width:'25px', height:'25px'}} src="/assets/woman.png" alt="user img" />Meghah</td>
              <td>ui/ux Designer</td>
              <td>John Samual</td>
              <td style={{color:'tomato'}}>Sick Leav</td>
            </tr>
            <tr style={{ height: "50px" }}>
              <td className="d-flex gap-3 "><img style={{width:'25px', height:'25px'}} src="/assets/user.png" alt="user img" />Salman</td>
              <td>React Dev</td>
              <td>Mubashir Ali</td>
              <td style={{color:'green'}}>Active</td>
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
            <button className="btn d-flex align-items-center" style={{height:'25px', backgroundColor:'white', border:'1px solid black'}}>Next</button>
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
