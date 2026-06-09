import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "src/components";
import { SectionId } from "../constants";
import Camera from "src/components/about/camera/Camera";

const About: React.FC = () => {
  return (
    <AboutSection id={SectionId.ABOUT}>
      <Camera />
    </AboutSection>
  );
};

const AboutSection = styled(SectionWrapper)`
  height: 100vh;
  width: 100vw;
  justify-items: center;
  align-items: center;
`;

export default About;
