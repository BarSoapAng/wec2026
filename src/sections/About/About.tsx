import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "src/components";
import { SectionId } from "../constants";
import Camera from "src/components/about/camera/Camera";
import { mediaQueries } from "src/lib/responsive";

const About: React.FC = () => {
  return (
    <AboutSection id={SectionId.ABOUT}>
      <Camera />
    </AboutSection>
  );
};

const AboutSection = styled(SectionWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 700px;
  width: 100vw;

  ${mediaQueries.medium} {
    height: 1000px;
    max-height: none;
  }
`;

export default About;
