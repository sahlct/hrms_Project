import React, { useEffect, useState } from "react";
import "./offCanvas.css";
import sideJson from "../jsonFiles/sidebar.json";

export default function OffCanvas({
  mainwidth,
  setMainWidth,
  opaacity,
  setOpacity,
  canvasWidth,
  setCanvasWidth,
  hide,
  setHide
}) {
  const [product, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("loading",loading);

  function settingWidth() {
    if (mainwidth === false) {
      setMainWidth(true);
      setCanvasWidth("250px");
      setOpacity("100%");
      setHide('flex')
    } else {
      setMainWidth(false);
      setCanvasWidth("50px");
      setOpacity("0%");
      setHide('none')
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

  const handleDropdown = (id) => {
    const dropdownMenu = document.getElementById(id);
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    } else {
      dropdownMenu.classList.add("show");
    }
  };
  return (
    <div>
      <div style={{ width: canvasWidth, left:'0' }} className="sideBar position-fixed ">
        <div
          className="accordion accordion-flush"
          style={{ width: canvasWidth }}
          id="accordionFlushExample"
        >
          {product.map((item, index) => (
            <div className="accordion-item w-100" key={index}>
              {/* main tab */}
              <div className="button_Container w-100" onMouseEnter={() => handleDropdown(`dropdownMenu_${item.id}`)}
                  onMouseLeave={() => handleDropdown(`dropdownMenu_${item.id}`)}>
                <i
                  className={`icons ${item.icon} d-flex justify-content-center`}
                  onClick={() => settingWidth()}
                ></i>
                <p className="icon-text mb-0" style={{display:hide, opacity:opaacity, transition: '0.6s ease-in-out'}}>
                  {item.header}
                </p>
                <button
                  style={{display:hide}}
                  className="accordion-button collapsed d-flex justify-content-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${item.id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${item.id}`}
                >
                  <i className="lni lni-chevron-down" style={{display:hide}}></i>
                </button>
                {/* dropDown  */}
                <div className="dropdown dropend">
                <ul className="dropdown-menu p-0" id={`dropdownMenu_${item.id}`}>
                  {/* Dropdown menu links */}
                  {item.Childs.map((child, index) => (
                    <li key={index} style={{height:'35px'}}>
                      <p className="dropdown-item">{child}</p>
                    </li>
                  ))}
                </ul>
              </div>
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
          ))}
        </div>
      </div>
    </div>
  );
}
