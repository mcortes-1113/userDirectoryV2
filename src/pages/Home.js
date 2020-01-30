import React from 'react';
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
    return (
        <div>
            <NavBar />
                <Container>
                    <Row>
                        <Col size="md-2">
                            <img
                                src={"ImageAssets/directory.png"}
                                alt="directory"
                                width="150"
                                height="150px"
                            />
                        </Col>
                            <Col size="md-6">
                                <h1 className="text-center">Welcome</h1>
                                    <h3 className="text-center">
                                    Please use the link on the top of the page to navigate to the Employee Directory
                                    </h3>
                            </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Home;