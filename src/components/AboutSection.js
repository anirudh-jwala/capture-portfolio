import React from "react";

// Styled components
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2> true.</h2>
          </Hide>
        </div>
        <p>
          Contact us on any photography or videography that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
