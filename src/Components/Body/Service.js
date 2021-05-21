import React from "react";
import Card from "./cards.js";
import Card_data from "./Card_Data.js";

const Service = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">OUR SERVICES</h2>
        <div className="row">
          {Card_data.map((item) => (
            <Card
              title={item.title}
              imgsrc={item.imgsrc}
              details={item.details}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
