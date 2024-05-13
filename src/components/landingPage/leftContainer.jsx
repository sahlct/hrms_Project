import React from "react";
// import Notes from "./notes";
import Tasks from "./tasks";
// import MainCard from "./mainCard";
import EmployeeList from "./mainCard";

export default function LeftContainer() {
  return (
    <div class="leftcontainer d-flex gap-5 ps-0 pe-0" style={{marginTop:'68px', paddingTop:'20px'}}>
      <div className="fullContainer d-flex flex-column ps-4 w-100 row-gap-4">
      <div class="row me-0 mb-0 overflow-auto me-4" style={{paddingLeft:'24px'}}>
        <div
          class="col p-0 overflow-hidden d-flex align-items-center"
          style={{
            // maxWidth: "260px",
            // minWidth: "260px",
            // width:'31%',
            border: "2px solid grey",
            // height:'80px',
            // boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 5px 0px'
          }}
        >
          <div className="IconParent h-100  d-flex" style={{width:'30%'}}>
            <div className="mainIcon d-flex justify-content-center align-items-center" style={{backgroundColor:'#eaedff'}}><i class="bi bi-people" style={{fontSize:'25px', color:'blue'}}></i></div>   
          </div>
          <div className="textHead d-flex h-100 gap-1"  style={{width:'70%'}}>
            <div className="headerText" style={{ fontSize: "clamp(12px, 1.2vw, 17px)", fontWeight: "700" }} >Total Employees</div>
            <div className="countText" style={{ fontSize: "clamp(20px, 2vw, 30px)", fontWeight: "700"}}>735</div>
          </div>
        </div>
        <div
          class="col p-0 overflow-hidden d-flex align-items-center"
          style={{
            // maxWidth: "260px",
            // minWidth: "260px",
            // width:'31%',
            border: "2px solid grey",
            // height:'80px',
            // boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 5px 0px'
          }}
        >
          <div className="IconParent h-100  d-flex" style={{width:'30%'}}>
            <div className="mainIcon d-flex justify-content-center align-items-center" style={{backgroundColor:'#e3fdd9' }}><i class="bi bi-person-check" style={{fontSize:'25px', color:'green'}}></i></div>   
          </div>
          <div className="textHead d-flex  h-100 gap-1"  style={{width:'70%'}}>
            <div className="headerText" style={{ fontSize: "clamp(12px, 1.2vw, 17px)", fontWeight: "700" }} >Toady's Attendence</div>
            <div className="countText" style={{fontSize: "clamp(20px, 2vw, 30px)", fontWeight: "700"}}>97%</div>
          </div>
        </div>
        <div
          class="col p-0 overflow-hidden d-flex align-items-center"
          style={{
            // maxWidth: "260px",
            // minWidth: "260px",
            // width:'31%',
            border: "2px solid grey",
            // height:'80px',
            // boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 5px 0px'
          }}
        >
          <div className="IconParent h-100  d-flex" style={{width:'30%'}}>
            <div className="mainIcon d-flex justify-content-center align-items-center" style={{backgroundColor:'#fde9cf'}}><i class="bi bi-person-x" style={{fontSize:'25px', color:'orange'}}></i></div>   
          </div>
          <div className="textHead d-flex h-100 gap-1"  style={{width:'70%'}}>
            <div className="headerText" style={{  fontSize: "clamp(12px, 1.2vw, 17px)", fontWeight: "700" }} >Leave Employees</div>
            <div className="countText" style={{fontSize: "clamp(20px, 2vw, 30px)", fontWeight: "700"}}>12</div>
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
