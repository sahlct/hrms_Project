import Navbar from "./navbar";
import OffCanvas from "./offCanvas";
import SmallCard from "./smallCard";
import MainCard from "./mainCard";
import { useState } from "react";
import Notes from "./notes";

export default function Container() {
  const [width, setWidth] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState("50px");
  const [display, setDisplay] = useState("0%");
  return (
    <div
      className="home_mainContainer  d-flex justify-content-end"
      style={{ minHeight: "100vh" }}
    >
      <Navbar
        setWidth={setWidth}
        width={width}
        setCanvasWidth={setCanvasWidth}
        setDisplay={setDisplay}
      />
      <OffCanvas
        width={width}
        setWidth={setWidth}
        display={display}
        setDisplay={setDisplay}
        canvasWidth={canvasWidth}
        setCanvasWidth={setCanvasWidth}
      />
      <div
        className="semi_container"
        style={{
          // width: width ? "calc(100vw - 267px)" : "calc(100vw - 50px)",
          transition: "0.6s ease-in-out",
          backgroundColor: "white",
          flexGrow: "1",
        }}
      >
        <SmallCard />
        <div className="d-flex w-100 justify-content-between ">
          <MainCard />
          <Notes />
        </div>
      </div>
    </div>
  );
}
