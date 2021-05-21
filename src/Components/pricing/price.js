import React from "react";
import { Card, CardTitle, CardText, Col, CardSubtitle } from "reactstrap";
const Price = (props) => {
  return (
    <Col md="4" className="my-5 text-center">
      <Card body className={props.cls}>
        <CardTitle tag="h3" className="pTitle">
          {props.title}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2">
          Get the party started
        </CardSubtitle>
        <hr />
        <CardText className="pPrice">
          $<span>{props.price}</span>/mon
        </CardText>
        <CardText className="pDetails">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maxime
          deserunt inventore. Debitis, sapiente quidem!
        </CardText>
        <button type="submit" class="btn btn4">
          Get Started
        </button>
      </Card>
    </Col>
  );
};
export default Price;
