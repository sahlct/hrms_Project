import React from "react";
import "./offCanvas.css";

export default function OffCanvas({canvasWidth, display}) {
  return (
    <div>
      <div style={{width:canvasWidth}} className="sideBar">
        <div className=" has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#auth" aria-expanded="false" aria-controls="auth"><i class="lni lni-grid-alt"></i><p style={{opacity:display}}>Dashboard</p><ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sideBar">
          <li className="sidebar-item"><p className="sidebar-link">login</p></li>
          <li className="sidebar-item"><p className="sidebar-link">signup</p></li>
          </ul></div>
        <div><i class="lni lni-agenda"></i><p style={{opacity:display}}>Task</p></div>
        <div><i class="lni lni-protection"></i><p style={{opacity:display}}>Auth</p></div>
        <div><i class="lni lni-layout"></i><p style={{opacity:display}}>MultiLeval</p></div>
        <div><i class="lni lni-popup"></i><p style={{opacity:display}}>Notification</p></div>
      </div>

      {/* <div
        style={{ marginTop: "68px", width: canvasWidth }}
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div style={{ height: "100px" }} class="offcanvas-body ps-0 pe-0">
          <div className="profileData d-flex justify-content-around align-items-center pb-4 ">
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1714803705~exp=1714804305~hmac=926e935284e6f4878148f98b591a28453913d0f98800eaedd46e3e75ef3410d9"
              alt=""
            />
            <div className="profileTexts">
              <h5 className=" mb-0 ">Isac Ebraham</h5>
              <p className=" mb-0 ">HR Manager</p>
            </div>
            <button style={{ backgroundColor: "#f7f7f7" }} className="btn">
              • • •
            </button>
          </div>
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  className="accordion-button d-flex gap-5 ps-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-layout-dashboard"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4h6v8h-6z" />
                      <path d="M4 16h6v4h-6z" />
                      <path d="M14 12h6v8h-6z" />
                      <path d="M14 4h6v4h-6z" />
                    </svg>
                  </div>
                  <div>Dashboard </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex flex-column p-0">
                  <button>Management</button>
                  <button>Upload</button>
                  <hr />
                  <button>File Types</button>
                  <button>Approval</button>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed d-flex gap-5 ps-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <div>
                    <i
                      class="bi bi-person-vcard"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <div>Employee</div>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
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
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed d-flex gap-5 ps-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div>
                    <i style={{ fontSize: "25px" }} class="bi bi-coin"></i>
                  </div>
                  <div>Expence Claim</div>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <button>Management</button>
                  <button>Review</button>
                  <hr />
                  <button>Transaction Report</button>
                  <hr />
                  <button>Catogory</button>
                  <button>Type</button>
                  <button>Approval Workflow</button>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed d-flex gap-5 ps-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <div>
                    <i style={{ fontSize: "25px" }} class="bi bi-people"></i>
                  </div>
                  <div>Attendence</div>
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <button>Management</button>
                  <button>Feild Check-in</button>
                  <hr />
                  <button>Time Clock Report</button>
                  <button>WorkDay</button>
                  <button>Holiday</button>
                  <hr />
                  <button>Setting</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      
  {/* <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          <i class="lni lni-grid-alt"></i> Dashboard
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sideBar">
            <li class="sidebar-item"><p class="sidebar-link">login</p></li>
            <li class="sidebar-item"><p class="sidebar-link">signup</p></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <i class="lni lni-agenda"></i> Task
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          <i class="lni lni-protection"></i> Auth
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          <i class="lni lni-layout"></i> MultiLeval
        </button>
      </h2>
      <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fourth item's accordion body.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          <i class="lni lni-popup"></i> Notification
        </button>
      </h2>
      <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fifth item's accordion body.</div>
      </div>
    </div>
  </div> */}
    </div>
  );
}


