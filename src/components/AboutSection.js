import React from "react";

// Styled components
import { About, Description, Hide, Image } from "../styles";

// Framer motion
import { motion } from "framer-motion";

import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2> true.</motion.h2>
          </Hide>
        </motion.div>
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
