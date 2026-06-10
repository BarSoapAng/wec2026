import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import Camera from "src/components/about/camera/Camera";
import { mediaQueries } from "src/lib/responsive";
import { colors, Body } from "src/lib/styles";

const About: React.FC = () => {
  return (
    <AboutSection id={SectionId.ABOUT}>
      <SectionHeading>OUR COMPETITIONS</SectionHeading>
      <Intro>
        Pick your event and dive in — from prototypes to pitches, there's a
        wave for everyone.
      </Intro>
      <CameraArea>
        <Camera />
      </CameraArea>
    </AboutSection>
  );
};

const AboutSection = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.background.sand};
  padding: 80px 0 40px;
  width: 100vw;
  gap: 20px;
`;

const Intro = styled(Body)`
  max-width: 560px;
  text-align: center;
  padding: 0 24px;
`;

const CameraArea = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQueries.medium} {
    height: auto;
    max-height: none;
    padding: 20px 0 40px;
  }
`;

export default About;
