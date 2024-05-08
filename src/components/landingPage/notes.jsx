import React from "react";
import "./notes.css";

export default function Notes() {
  return (
    <div style={{ width: "30%", marginRight:'50px', marginTop:'45px'}}>
      <div className="noteContainer">
        {/* <div class="container"> */}
        <div className="d-flex justify-content-between align-items-center ps-3 pe-3">
          <h5 style={{fontWeight:'700'}}>Notes</h5>
          <button type="button" class="btn btn-primary mb-3 d-flex align-items-center" style={{height:'30px'}}>
          <i class="bi bi-plus"></i> Add
          </button>
          </div>
          <div class="note">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Meeting with V-Star
              </label><br />
              <small class="text-muted">
                  Discuss the Website Redesign...
            </small>
            </div>
            <div class="d-flex justify-content-start">
              <span class="badge bg-danger me-2">Today</span>
              <span class="badge bg-warning">Meeting</span>
              <small class="text-muted ms-auto">May 10</small>
            </div>
          </div>
          <div class="note">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Meeting with Nike
              </label><br />
              <small class="text-muted">
                  Discuss the Website Redesign...
            </small>
            </div>
            <div class="d-flex justify-content-start">
              <span class="badge bg-danger me-2">Tomorrow</span>
              <span class="badge bg-warning">Meeting</span>
              <small class="text-muted ms-auto">May 11</small>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
