import React from "react";
// import OffCanvas from './offCanvas'

export default function Navbar({
  mainwidth,
  setMainWidth,
  setCanvasWidth,
  setOpacity,
  setHide,
}) {
  // setWidth(true)
  function settingWidth() {
    if (mainwidth === false) {
      setMainWidth(true);
      setCanvasWidth("250px");
      setOpacity("100%");
      setHide("block");
    } else {
      setMainWidth(false);
      setCanvasWidth("60px");
      setOpacity("0%");
      setHide("none");
    }
  }
  return (
    <div
      style={{
        backgroundColor: "#174b3f",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "2",
        boxShadow: "5px 12px 13px -10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <nav class="navbar">
        <div class="Maincontainer-fluid w-100 d-flex align-items-center flex-nowrap justify-content-between">
          <div className="leftSide d-flex align-items-center ps-lg-4 ps-sm-1 justify-content-center ">
            <button class="btn" type="button" onClick={() => settingWidth()}>
              <i
                style={{ fontSize: "25px", color: "white" }}
                class="bi bi-list"
              ></i>
            </button>

            <h1
              class="navbar-brand ms-lg-5 ms-sm-1 d-flex align-items-center justify-content-center pb-0"
              style={{ color: "white", fontSize: "25px" }}
            >
              Circle <span style={{ fontWeight: "700" }}>Soft</span>
            </h1>
          </div>
          <div className="centerSide w-50">
            <form className="d-flex w-100 " role="search">
              <div className="searchBox d-flex align-items-center w-75 position-relative ">
                {/* <div style={{color:'black'}}><i class="bi bi-search"></i></div> */}
                <input
                  class="form-control  border-0 "
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <span style={{ position: "absolute", right: "15px" }}>
                  <i class="bi bi-search"></i>
                </span>
                {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
              </div>
            </form>
          </div>
          <div className="rightSide d-flex justify-content-evenly">
            <button
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "8px",
                position: "relative",
              }}
              className="notificationBtn btn border-0 me-lg-4 me-sm-3"
            >
              <i class="bi bi-bell"></i>
              <div className="dot"
                style={{
                  position: "fixed",
                  width: "5px",
                  height: "5px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  top: "25px",
                  // right: "118px",
                }}
              ></div>
            </button>
            <div className="profileImage"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundPosition:'center',
                backgroundSize:'cover',
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                // marginRight:'40px',
                border:'2px solid white'
              }}
            ></div>
          </div>
          {/* <div className="profile"></div> */}
        </div>
        {/* <OffCanvas/> */}
      </nav>
    </div>
  );
}
