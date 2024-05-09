import React from "react";
// import OffCanvas from './offCanvas'

export default function Navbar({ width, setWidth, setCanvasWidth, setDisplay}) {
  // setWidth(true)
  function settingWidth() {
    if (width === false) {
      setWidth(true);
      setCanvasWidth("250px")
      setDisplay('100%')
    } else {
      setWidth(false);
      setCanvasWidth("60px")
      setDisplay('0%')
    }
  }
  return (
    <div
      style={{
        backgroundColor: "#725cff",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex:'2'
      }}
    >
      <nav class="navbar">
        <div class="Maincontainer-fluid w-100 d-flex align-items-center flex-nowrap justify-content-between">
          <div className="rightSide d-flex align-items-center ps-lg-4 ps-sm-1 justify-content-center ">
            <button
              class="btn"
              type="button"
              onClick={() => settingWidth()}
            >
              <i
                style={{ fontSize: "25px", color: "black" }}
                class="bi bi-list"
              ></i>
            </button>

            <h1 class="navbar-brand ms-lg-5 ms-sm-1 d-flex align-items-center justify-content-center pb-0" style={{ color: "black", fontSize:'25px'}}>
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
              <span style={{position:'absolute', right:'15px'}}><i class="bi bi-search"></i></span>
              {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            </div>
          </form>
          </div>
          <div className="rightSide">
          <button
            style={{
              backgroundColor: "#f7f7f7",
              borderRadius: "8px",
              position: "relative",
            }}
            className="notificationBtn btn border-0 me-lg-5 me-sm-1 "
          >
            <i class="bi bi-bell"></i>
            <div
              style={{
                position: "fixed",
                width: "5px",
                height: "5px",
                backgroundColor: "red",
                borderRadius: "50%",
                top: "25px",
                right: "62px",
              }}
            ></div>
          </button>
          </div>
          {/* <div className="profile"></div> */}
        </div>
        {/* <OffCanvas/> */}
      </nav>
    </div>
  );
}
