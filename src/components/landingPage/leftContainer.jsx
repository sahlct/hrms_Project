import React from "react";
// import Notes from "./notes";
import Tasks from "./tasks";
// import MainCard from "./mainCard";
import EmployeeList from "./mainCard";

export default function LeftContainer() {
  return (
    <div class="container d-flex gap-5 ps-0 pe-0 w-75" style={{marginTop:'68px', paddingTop:'20px'}}>
      <div className="fullContainer d-flex flex-column ps-4 w-100 row-gap-4">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 gap-4 me-0 mb-0" style={{paddingLeft:'24px'}}>
        <div
          class="col rounded-4 p-0 overflow-hidden d-flex align-items-center gap-4 "
          style={{
            maxWidth: "260px",
            minWidth: "260px",
            border: "2px solid grey",
            height:'80px'
          }}
        >
          <div className="h-100  d-flex justify-content-end align-items-center " style={{width:'30%'}}>
            <div className="mainIcon d-flex justify-content-center align-items-center" style={{height:'50px',width:'50px',borderRadius:'50%', backgroundColor:'#eaedff'}}><i class="bi bi-people" style={{fontSize:'25px', color:'blue'}}></i></div>   
          </div>
          <div className="d-flex justify-content-center align-items-start flex-column h-100 gap-1"  style={{width:'70%'}}>
            <div className="headerText" style={{ fontSize: "15px", fontWeight: "700" }} >Total Employees</div>
            <div className="countText" style={{fontSize:'30px', fontWeight: "700"}}>735</div>
          </div>
        </div>
        <div
          class="col rounded-4 p-0 overflow-hidden d-flex align-items-center gap-4 "
          style={{
            maxWidth: "260px",
            minWidth: "260px",
            border: "2px solid grey",
            height:'80px'
          }}
        >
          <div className="h-100  d-flex justify-content-end align-items-center " style={{width:'30%'}}>
            <div className="mainIcon d-flex justify-content-center align-items-center" style={{height:'50px',width:'50px',borderRadius:'50%', backgroundColor:'#e3fdd9' }}><i class="bi bi-person-check" style={{fontSize:'25px', color:'green'}}></i></div>   
          </div>
          <div className="d-flex justify-content-center align-items-start flex-column h-100 gap-1"  style={{width:'70%'}}>
            <div className="headerText" style={{ fontSize: "15px", fontWeight: "700" }} >Today's Attendence</div>
            <div className="countText" style={{fontSize:'30px', fontWeight: "700"}}>97 %</div>
          </div>
        </div>
        <div
          class="col rounded-4 p-0 overflow-hidden d-flex align-items-center gap-4 "
          style={{
            maxWidth: "260px",
            minWidth: "260px",
            border: "2px solid grey",
            height:'80px'
          }}
        >
          <div className="h-100  d-flex justify-content-end align-items-center " style={{width:'30%'}}>
            <div className="mainIcon d-flex justify-content-center align-items-center" style={{height:'50px',width:'50px',borderRadius:'50%', backgroundColor:'#fde9cf'}}><i class="bi bi-person-x" style={{fontSize:'25px', color:'orange'}}></i></div>   
          </div>
          <div className="d-flex justify-content-center align-items-start flex-column h-100 gap-1"  style={{width:'70%'}}>
            <div className="headerText" style={{ fontSize: "15px", fontWeight: "700" }} >Leave Employees</div>
            <div className="countText" style={{fontSize:'30px', fontWeight: "700"}}>12</div>
          </div>
        </div>
      </div>
        <Tasks />
        <EmployeeList />
      </div>
      {/* <div className="rightBar w-25 ">
      <Notes />
      </div> */}
    </div>
  );
}
