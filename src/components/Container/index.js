import React from "react";
// import "./style.css";

// function Container() {
//   return <main className="container" />;

function Container(props) {
  return <main className="container" {...props} />;
}

export default Container;