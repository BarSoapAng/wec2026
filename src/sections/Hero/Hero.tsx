import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors } from "src/lib/styles";
import { Umbrella } from "src/assets";
import { DescriptionSign, ApplicationSign } from "src/components";

const Hero: React.FC = () => {
  return (
    <HeroSection id={SectionId.HERO}>
      <Sky />
      <UmbrellaImage src={Umbrella} />
      <ApplicationSign />
      <DescriptionSign />
    </HeroSection>
  );
};

const HeroSection = styled(SectionWrapper)`
  min-height: 980px;

  ${mediaQueries.medium} {
    height: 100vh;
  }
`;

const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 40vh;
  background: linear-gradient(to bottom, ${colors.background.skyDark}, ${colors.background.skyLight});

  ${mediaQueries.medium} {
    height: 45vh;
  }
`;

const UmbrellaImage = styled.img`
  z-index: 10;
`;

export default Hero;
