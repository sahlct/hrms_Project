import React from "react";

export default function MainCard() {
  return (
    <div>
      <div className="empContainer">
        <div className="empHeader"><h4>Employees</h4><button>Filter</button></div>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Job Title</th>
              <th>Team Lead</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Afsal</td>
              <td>Cyber Security</td>
              <td>Anand Saayi</td>
              <td>Sick Leav</td>
            </tr>
            <tr>
              <td>Meghah</td>
              <td>ui/ux Designer</td>
              <td>John Samual</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Salman</td>
              <td>React Dev</td>
              <td>John Samual</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
        <div className="empFooter">Showing 1 to 3 of 45 Entries</div>
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
