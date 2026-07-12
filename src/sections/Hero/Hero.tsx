import React from "react";
import styled, { keyframes } from "styled-components";
import { ApplicationSign, Cloud, HeroSea, SectionWrapper } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { Header1, colors } from "src/lib/styles";
import { Umbrella } from "src/assets";

const Hero: React.FC = () => {
  return (
    <HeroSection id={SectionId.HERO}>
      <Sky>
        <CloudLayer aria-hidden="true">
          <DriftingCloud $top={20} $size={360} $duration={70} $delay={0} $opacity={0.7}>
            <Cloud />
          </DriftingCloud>
          <DriftingCloud $top={0} $size={450} $duration={80} $delay={-60} $opacity={0.78} $flip>
            <Cloud />
          </DriftingCloud>
          <DriftingCloud $top={56} $size={300} $duration={65} $delay={-31} $opacity={0.6}>
            <Cloud />
          </DriftingCloud>
          <DriftingCloud $top={50} $size={340} $duration={68} $delay={-10} $opacity={0.7} $flip>
            <Cloud />
          </DriftingCloud>
        </CloudLayer>
      </Sky>
      <Sand />
      <HeroSea />
      <HeroTitle>Waterloo Engineering Competition</HeroTitle>
      <UmbrellaImage src={Umbrella} alt="" aria-hidden="true" draggable={false} />
      <ApplicationSignPosition>
        <ApplicationSign />
      </ApplicationSignPosition>
    </HeroSection>
  );
};

const driftCloud = keyframes`
  from {
    transform: translate3d(-280px, 0, 0);
  }

  to {
    transform: translate3d(calc(100vw + 280px), 0, 0);
  }
`;

const HeroSection = styled(SectionWrapper)`
  min-height: 760px;
  height: min(980px, 100vh);
  width: 100vw;
  overflow: clip;
  background: ${colors.background.sand};

  ${mediaQueries.medium} {
    height: 100vh;
  }
`;

const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 41%;
  background:
    linear-gradient(180deg, ${colors.background.skyDark} 0%, ${colors.background.skyLight} 100%);

  ${mediaQueries.medium} {
    height: 45vh;
  }

  ${mediaQueries.smallTablet} {
    height: 320px;
  }
`;

const CloudLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

const DriftingCloud = styled.div<{
  $top: number;
  $size: number;
  $duration: number;
  $delay: number;
  $opacity: number;
  $flip?: boolean;
}>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: 0;
  width: clamp(
    ${({ $size }) => Math.round($size * 0.62)}px,
    ${({ $size }) => Math.round(($size / 1440) * 100)}vw,
    ${({ $size }) => $size}px
  );
  opacity: ${({ $opacity }) => $opacity};
  filter: drop-shadow(0 8px 0 ${colors.background.skyDark}55);
  will-change: transform;
  animation: ${driftCloud} ${({ $duration }) => $duration}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  svg {
    display: block;
    width: 100%;
    height: auto;
    transform: ${({ $flip }) => ($flip ? "scaleX(-1)" : "none")};
  }

  ${mediaQueries.smallTablet} {
    top: ${({ $top }) => Math.max($top, 28)}%;
    width: ${({ $size }) => Math.round($size * 0.58)}px;
  }

  ${mediaQueries.largeMobile} {
    width: ${({ $size }) => Math.round($size * 0.48)}px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation-play-state: paused;
  }
`;

const Sand = styled.div`
  position: absolute;
  inset: 41% 0 0;
  z-index: 0;
  background: linear-gradient(to bottom, ${colors.background.sandDark} 0%, ${colors.background.sand} 100%);

  ${mediaQueries.medium} {
    top: 45vh;
  }

  ${mediaQueries.smallTablet} {
    top: 320px;
  }
`;

const HeroTitle = styled(Header1)`
  position: absolute;
  top: 30%;
  left: 8%;
  z-index: 30;
  max-width: 560px;
  color: ${colors.text.black};
  font-size: clamp(44px, 5.4vw, 76px);
  line-height: 0.96;
  text-wrap: balance;
  text-shadow: 3px 3px 0 ${colors.primary.white};

  ${mediaQueries.medium} {
    top: 24%;
    left: 7%;
    max-width: 470px;
    font-size: 58px;
  }

  ${mediaQueries.tablet} {
    top: 14%;
    left: 8%;
    max-width: 360px;
    font-size: 42px;
  }

  ${mediaQueries.smallTablet} {
    top: 13%;
    left: 6%;
    max-width: 290px;
    font-size: 34px;
    text-shadow: 2px 2px 0 ${colors.primary.white};
  }

  ${mediaQueries.largeMobile} {
    top: 14%;
    max-width: 240px;
    font-size: 28px;
  }

  ${mediaQueries.smallMobile} {
    max-width: 220px;
    font-size: 24px;
  }
`;

const UmbrellaImage = styled.img`
  position: absolute;
  top: 12%;
  left: 30%;
  width: clamp(350px, 29vw, 500px);
  z-index: 10;
  height: auto;
  pointer-events: none;
  user-select: none;

  ${mediaQueries.medium} {
    top: 13%;
    left: 35%;
    width: 450px;
  }

  ${mediaQueries.tablet} {
    top: 20%;
    left: 39%;
    width: 350px;
  }

  ${mediaQueries.smallTablet} {
    top: 25%;
    left: 30%;
    width: min(350px, 65vw);
  }
`;

const ApplicationSignPosition = styled.div`
  position: absolute;
  right: 15%;
  bottom: 5%;
  z-index: 20;
  width: clamp(400px, 32vw, 500px);

  ${mediaQueries.medium} {
    right: 5%;
    bottom: 6%;
  }

  ${mediaQueries.tablet} {
    width: 300px;
    right: 10%;
    bottom: 10%;
  }

  ${mediaQueries.smallTablet} {
    right: 5%;
    bottom: 2%;
    width: min(80vw, 300px);
  }

`;

export default Hero;
