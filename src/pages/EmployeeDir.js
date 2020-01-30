import React from 'react';
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Employees from "../Employees.json";
import SortBy from "../components/Sort";
import FilterBy from "../components/Filter";
import EmployeeList from '../components/EmployeeList';
// import EmployeeCard from "../components/Card";

function Directory() {
    return (
        <div>
            <NavBar />
                <Container>
                    <Row>
                    <Col size="md-2">
                        <img
                            src={"ImageAssets/directory.png"}
                            alt="directory"
                            width="75px"
                            height="75px"
                        />
                    </Col>
                        <Col size="md-10">
                            <h1>Employee Directory</h1>
                        </Col>
                    </Row>
                    <br />
                        <Row>
                            <Col size="md-12">
                                <SortBy /><br />
                                <FilterBy /><br />
                                <h6 style={{color: "red"}}>***Button function only work on console log for now***</h6><br />
                            </Col>
                        </Row>
                            <EmployeeList />
                </Container>
        </div>
    )
}

export default Directory;