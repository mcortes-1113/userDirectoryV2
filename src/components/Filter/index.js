import React from "react";
import Employees from "../../Employees.json";

function FilterBy() {

  function filterInactive() {
    var InactiveEmployees = Employees.filter(function (i) {
      return i.active === "No";
    })
      console.log(InactiveEmployees);
}

  function filterActive() {
    var activeEmployees = Employees.filter(function (i) {
      return i.active === "Yes";
    })
    console.log(activeEmployees);
}

  return (
    <div>
    <button type="button" className="btn btn-light" style={{marginRight: "10px"}} onClick = { filterInactive }>Show Inactive Employees Only</button>
    <button type="button" className="btn btn-light" onClick = { filterActive }>Show Active Employees Only</button>
    </div>
  )
}

export default FilterBy;