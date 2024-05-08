import React, { useEffect, useState } from "react";
import "./offCanvas.css";
import sideJson from "../jsonFiles/sidebar.json";

export default function OffCanvas({width, setWidth, display, setDisplay, canvasWidth, setCanvasWidth}) {
  const [product, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);

  function settingWidth() {
    if (width === false) {
      setWidth(true);
      setCanvasWidth("250px")
      setDisplay('100%')
    } else {
      setWidth(false);
      setCanvasWidth("50px")
      setDisplay('0%')
    }
  }

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(sideJson);
        setLoading(false);
      }, 1000);
    };

    fetchData();

    return () => {};
  }, []);
  return (
    <div>
      <div style={{ width: canvasWidth }} className="sideBar">
        <div
          class="accordion accordion-flush"
          style={{ width: canvasWidth }}
          id="accordionFlushExample"
        >
          {product.map((item, index) => {
            return (
              <div class="accordion-item w-100">
                <div className="button_Container w-100">
                  <i
                    className={`icons ${item.icon} d-flex justify-content-center`}  onClick={() => settingWidth()}
                  ></i>
                  <p className="icon-text mb-0" style={{ opacity: display }}>
                    {item.header}
                  </p>
                  <button
                    className="accordion-button collapsed d-flex justify-content-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${item.id}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${item.id}`}
                  >
                    <i class="lni lni-chevron-down"></i>
                  </button>
                </div>
                <div
                  id={`flush-collapse${item.id}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {item.Childs.map((child, index) => (
                      <button key={index}>{child}</button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
