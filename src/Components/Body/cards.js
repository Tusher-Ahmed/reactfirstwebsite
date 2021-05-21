import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <Col md={4} className="gy-3">
      <Card key={props.key}>
        <CardImg
          top
          width="100%"
          src={props.imgsrc}
          alt={`image ${props.key}`}
        />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>{props.details}</CardText>
          <Link to="/pricing" className="btn btn2">
            Check Now
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Cards;
