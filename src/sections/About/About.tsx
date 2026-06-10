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
        Explore our competition streams and choose how you want to build and innovate. Each category offers a unique challenge designed to test real-world engineering skills.
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
  padding: 50px 0;
  width: 100vw;
  gap: 16px;

  ${mediaQueries.tablet} {
    padding: 50px 0;
  }
`;

const Intro = styled(Body)`
  max-width: 560px;
  text-align: center;
  padding: 0 24px;
  margin-bottom: 24px;
`;

const CameraArea = styled.div`
  width: 100%;
  height: 76vh;
  max-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQueries.medium} {
    height: auto;
    max-height: none;
    padding: 12px 0 24px;
  }
`;

export default About;
