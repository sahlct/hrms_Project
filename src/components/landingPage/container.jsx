import Navbar from "./navbar";
import OffCanvas from "./offCanvas";
import { useEffect, useState } from "react";
import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";
import "./container.css";

export default function Container() {
  const [mainwidth, setMainWidth] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState("60px");
  const [opaacity, setOpacity] = useState("0%");
  const [hide, setHide] = useState("none");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBelow1000px, setIsBelow1000px] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsBelow1000px(width < 1001);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
      console.log('windoWidth',windowWidth);
  // Define the inline style based on conditions
  const semiContainerStyle = {
    width: isBelow1000px ? '100vw' : (mainwidth ? 'calc(100vw - 250px)' : 'calc(100vw - 50px)')
  };

  return (
    <div
      className="home_mainContainer  d-flex justify-content-end"
      style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      <Navbar
        setMainWidth={setMainWidth}
        mainwidth={mainwidth}
        setCanvasWidth={setCanvasWidth}
        setOpacity={setOpacity}
        setHide={setHide}
      />
      <OffCanvas
        mainwidth={mainwidth}
        setMainWidth={setMainWidth}
        opaacity={opaacity}
        setOpacity={setOpacity}
        canvasWidth={canvasWidth}
        setCanvasWidth={setCanvasWidth}
        hide={hide}
        setHide={setHide}
      />
      {/* Pass the style object to the div */}
      <div className="semi_container d-flex" style={semiContainerStyle}>
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
}
