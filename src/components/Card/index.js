import React from "react";
// import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} width={"100px"} height={"100px"} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {props.lastName}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Active Status:</strong> {props.active}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
