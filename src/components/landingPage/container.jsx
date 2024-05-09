import Navbar from "./navbar";
import OffCanvas from "./offCanvas";
import SmallCard from "./smallCard";
import MainCard from "./mainCard";
import { useState } from "react";
import Notes from "./notes";
import RunningProject from "./runProject";

export default function Container() {
  const [width, setWidth] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState("60px");
  const [display, setDisplay] = useState("0%");
  return (
    <div
      className="home_mainContainer  d-flex justify-content-end"
      style={{ minHeight: "100vh",
      // backgroundImage:'url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm281batch2-nunny-006.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5c132c2d92b91df76c16aaaafcec8fa7)',
      // backgroundPosition:'center',
      // backgroundRepeat:'no-repeat',
      // backgroundSize:'cover'
      backgroundColor:'#d6eff469'
      }}
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
          transition: "0.6s ease-in-out",
          flexGrow: "1",
          // backdropFilter:'blur(10px)'
        }}
      >
        <SmallCard />
        <div className="d-flex w-100 justify-content-around ">
          <MainCard />
          <Notes />
        </div>
        <RunningProject />
      </div>
    </div>
  );
}
