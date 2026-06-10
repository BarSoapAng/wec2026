import styled from "styled-components";
import { mediaQueries } from "./responsive";

export const colors = {
  text: {
    black: "#000"
  },
  background: {
    sand: "#fce5c9",
    sandDark: "#f3d3a8",
    skyLight: "#e1f7ff",
    skyDark: "#b9d0f3",
    seaLight: "#bfe9f2",
    sea: "#8fd3e6",
    seaDark: "#5fb6cf",
  },
  accent: {
    coral: "#f08c7d",
    coralDark: "#d96b5b",
    purple: "#a08fd6",
    sun: "#e0a14f",
  },
  primary: {
    white: "#FFF",
    gray: "#7a7a7a",
    purple: "#9c87d6",
    purpleLight: "#dccfff",
  },
  secondary: {
    crimson: "#e55a77",
    crimsonDark: "#b43f58",
    redPastel: "#fe9292",
    azure: "#2485a8",
  }
};

export const Title = styled.h1`
  margin: 0px;
  font-family: "Castledown";
  font-size: 56px;
  font-weight: 700;
  line-height: 145%;
  letter-spacing: 0%;

  ${mediaQueries.tablet} {
    font-size: 36px;
    font-weight: 900;
    line-height: 120%;
  }
`;

export const Header1 = styled.h1`
  margin: 0px;
  font-family: "Castledown";
  font-style: normal;
  font-size: 48px;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: 0%;

  ${mediaQueries.tablet} {
    font-size: 36px;
  }

  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

export const Header2 = styled.h2`
  margin: 0px;
  font-family: "Castledown";
  font-size: 36px;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: 0%;

  ${mediaQueries.tablet} {
    font-size: 20px;
  }
`;

export const Header3 = styled.h3`
  margin: 0px;
  font-family: "Castledown";
  font-size: 24px;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: 0%;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const Body = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0%;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const BodyRegular = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0%;
`;

export const BodyBold = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
  padding: 0px;
  margin: 0px;
  line-height: 160%;
  letter-spacing: 0%;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const BodyHeavy = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 900;
  line-height: 130%;
  letter-spacing: 0%;
`;

export const Caption = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const Overline = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 18px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 5%;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Castledown";
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0%;
  white-space: nowrap;
`;

export const ButtonTextMobile = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Castledown";
  font-size: 16px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0%;
  white-space: nowrap;
`;
