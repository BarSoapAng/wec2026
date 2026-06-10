import React from "react";
import styled from "styled-components";
import { mediaQueries } from "src/lib/responsive";
import { colors } from "src/lib/styles";

const HeroSea: React.FC = () => (
  <SeaScene aria-hidden="true" viewBox="0 0 1440 470" preserveAspectRatio="none">
    <SeaBase d="M-40 -20H1148C1045 28 980 84 909 128C808 190 694 196 590 240C493 281 472 330 586 360C738 400 770 437 588 458C423 477 211 472 -40 470Z" />
    <ShallowWater d="M-40 302C125 292 259 276 376 242C520 201 640 198 762 158C892 115 982 39 1148 -20C1045 30 981 88 912 134C817 198 703 207 600 250C516 286 506 321 606 344C781 384 800 430 590 452C421 470 209 465 -40 462Z" />
    <FoamEdge
      d="M1152 -24C1045 30 980 88 910 134C815 197 704 207 600 250C516 286 506 321 606 344C782 384 801 430 590 452C421 470 209 465 -50 462"
    />
    <DeepWater d="M-40 196C113 195 262 184 398 156C527 130 650 122 784 138C699 174 622 210 545 248C450 295 341 321 202 334C106 343 26 345 -40 342Z" />
  </SeaScene>
);

const SeaScene = styled.svg`
  position: absolute;
  top: 41%;
  left: 0;
  z-index: 1;
  width: 44vw;
  min-width: 560px;
  height: 34%;
  overflow: hidden;
  pointer-events: none;

  ${mediaQueries.medium} {
    top: 45vh;
    width: 56vw;
    min-width: 460px;
    height: 30%;
  }

  ${mediaQueries.smallTablet} {
    top: 320px;
    width: 78vw;
    min-width: 0;
    height: 220px;
  }
`;

const SeaBase = styled.path`
  fill: ${colors.background.sea};
`;

const ShallowWater = styled.path`
  fill: ${colors.background.seaLight};
`;

const DeepWater = styled.path`
  fill: ${colors.background.seaDark};
  opacity: 0.28;
`;

const FoamEdge = styled.path`
  fill: none;
  stroke: ${colors.primary.white};
  stroke-width: 22;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export default HeroSea;
