import Navbar from "./navbar";
import OffCanvas from "./offCanvas";
import SmallCard from "./smallCard";
import MainCard from "./mainCard";
import { useState } from "react";

export default function Container() {
  const [width, setWidth] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState('50px');
  const [display, setDisplay] = useState('0%')
  return (
    <div
      className="home_mainContainer  d-flex justify-content-end"
      style={{ minHeight: "100vh" }}
    >
      <Navbar setWidth={setWidth} width={width} setCanvasWidth={setCanvasWidth} setDisplay={setDisplay}/>
      <OffCanvas width={width} setWidth={setWidth} display={display}  setDisplay={setDisplay} canvasWidth={canvasWidth} setCanvasWidth={setCanvasWidth}/>
      <div
        className="semi_container"
        style={{
          width: width ? "calc(100vw - 300px)" : "95%",
          transition: "0.6s ease-in-out",
        }}
      >
        <SmallCard />
        <MainCard />
      </div>
    </div>
  );
}
