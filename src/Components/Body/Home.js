import React from "react";
import web from "../../image/img1.png";
import Common from "./common";
const Home = () => {
  return (
    <div>
      <Common
        intro="Grow your business with"
        imgsrc={web}
        visit="/service"
        visitto="Get Started"
      />
    </div>
  );
};
export default Home;
