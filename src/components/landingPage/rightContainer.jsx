import React from "react";
import Notes from "./notes";
import Document from "./document";

export default function RightContainer() {
  return (
    <div className="rightContainer w-25 d-flex flex-column gap-4" style={{marginTop: '68px', paddingTop: '20px'}}>
        <Document />
      <Notes />
      {/* <Notes /> */}
    </div>
  );
}
