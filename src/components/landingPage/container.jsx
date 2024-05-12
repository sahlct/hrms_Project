import Navbar from "./navbar";
import OffCanvas from "./offCanvas";
import SmallCard from "./smallCard";
import MainCard from "./mainCard";
import { useState } from "react";
// import Notes from "./notes";
import RunningProject from "./runProject";

export default function Container() {
  const [width, setWidth] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState("60px");
  const [opaacity, setOpacity] = useState("0%");
  const [hide, setHide] = useState('none')
  return (
    <div
      className="home_mainContainer  d-flex justify-content-end"
      style={{ minHeight: "100vh",
      backgroundColor:'white'
      }}
    >
      <Navbar
        setWidth={setWidth}
        width={width}
        setCanvasWidth={setCanvasWidth}
        setOpacity={setOpacity}
        setHide={setHide}
      />
      <OffCanvas
        width={width}
        setWidth={setWidth}
        opaacity={opaacity}
        setOpacity={setOpacity}
        canvasWidth={canvasWidth}
        setCanvasWidth={setCanvasWidth}
        hide={hide}
        setHide={setHide}
      />
      <div
        className="semi_container"
        style={{
          transition: "0.6s ease-in-out",
          flexGrow: "1",
        }}
      >
        <SmallCard />
        {/* <Notes /> */}
        <div className="d-flex w-100 justify-content-start ">
          <MainCard />
        </div>
        <RunningProject />
      </div>
    </div>
  );
}
