import React from "react";
import web from "../../image/img2.png";
import Common from "./common.js";
const About = () => {
  return (
    <div>
      <Common
        intro="Welcome to my About Page"
        imgsrc={web}
        visit="/contact"
        visitto="Contact Us"
      />
    </div>
  );
};
export default About;
