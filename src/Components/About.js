/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function About(props) {
  return (
    <>
      <div className="container">
        <Row>
          <Col>
            <img
              className="img"
              src="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2017/05/how-much-does-interior-design-cost-1024x683.jpg"
              style={{ width: "100%", height: "300px" }}
            />
            <img
              className="img"
              src="https://images.unsplash.com/photo-1617098474202-0d0d7f60c56b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80"
              style={{ width: "100%", height: "400px" }}
            />
          </Col>
          <Col>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1617098474202-0d0d7f60c56b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80"
              style={{ width: "100%", height: "400px" }}
            />
            <img
              className="img"
              src="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2017/05/how-much-does-interior-design-cost-1024x683.jpg"
              style={{ width: "100%", height: "300px" }}
            />
          </Col>
          <Col>
            <img
              className="img"
              src="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2017/05/dark-bedroom-interior-design-price-1024x578.jpg"
              style={{ width: "100%", height: "300px" }}
            />
            <img
              className="img"
              src="https://images.unsplash.com/photo-1617098474202-0d0d7f60c56b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80"
              style={{ width: "100%", height: "400px" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
