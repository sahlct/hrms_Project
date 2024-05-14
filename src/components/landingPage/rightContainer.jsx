import React from "react";
import Notes from "./notes";
import Document from "./document";

export default function RightContainer() {
  return (
    <div className="rightContainer d-flex gap-4" style={{ paddingTop: '26px'}}>
        <Document />
        <Notes />
    </div>
  );
}
