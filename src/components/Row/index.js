import React from "react";

// function Row() {
//   return <div className="row" />;
// }

function Row(props) {
    return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
  }

export default Row;
