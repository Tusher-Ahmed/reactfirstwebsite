import React from "react";
import Price from "./price.js";
import { Container, Row } from "reactstrap";

const MainPrice = () => {
  return (
    <Container>
      <h2 className="text-center my-2">PRICING TABLE</h2>
      <Row>
        <Price title="Personal" price="49" cls="pCard" />
        <Price title="Business" price="99" cls="pCard1" />
        <Price title="Expert" price="229" cls="pCard" />
      </Row>
    </Container>
  );
};
export default MainPrice;
