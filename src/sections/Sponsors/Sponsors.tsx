import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors, ButtonText, Body, BodyBold } from "src/lib/styles";
import { Surfboards } from "src/assets";

type Tier = {
  name: string;
  color: string;
  slots: number;
};

const TIERS: Tier[] = [
  { name: "GOLD", color: "#e0b53d", slots: 3 },
  { name: "SILVER", color: "#b6bac6", slots: 4 },
  { name: "BRONZE", color: "#c2814c", slots: 5 },
];

const Sponsors: React.FC = () => {
  return (
    <SponsorsSection id={SectionId.SPONSORS}>
      <Content>
        <SectionHeading>OUR SPONSORS</SectionHeading>
        <Intro>
          WEC is powered by sponsors who believe in student engineering. Your partnership will help us with the resources, mentorship, and opportunities for participants while directly engaging with some of University of Waterloo's brightest students.
        </Intro>
        <Intro>
          Together, we can empower students and shape innovation.
        </Intro>

        <Tiers>
          {TIERS.map(({ name, color, slots }) => (
            <TierRow key={name}>
              <TierBanner style={{ background: color }}>
                <ButtonText>{name}</ButtonText>
              </TierBanner>
              <Slots>
                {Array.from({ length: slots }).map((_, i) => (
                  <Slot key={i}>
                    <BodyBold>Your logo</BodyBold>
                  </Slot>
                ))}
              </Slots>
            </TierRow>
          ))}
        </Tiers>

        <SurfboardsImg src={Surfboards} alt="" />
      </Content>
    </SponsorsSection>
  );
};

const SponsorsSection = styled(SectionWrapper)`
  position: relative;
  background: ${colors.background.sand};
  padding: 50px 6vw;
  overflow: hidden;

  .sponsors-plant {
    position: absolute;
    z-index: 1;
    bottom: 40px;
    left: 3%;
    width: 80px;

    ${mediaQueries.medium} {
      display: none;
    }
  }

  ${mediaQueries.tablet} {
    padding: 50px 6vw;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Intro = styled(Body)`
  max-width: 600px;
  text-align: center;
`;

const Tiers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 4px;
`;

const TierRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${mediaQueries.smallTablet} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

const TierBanner = styled.div`
  flex: 0 0 auto;
  width: 150px;
  padding: 14px 18px;
  display: flex;
  justify-content: center;
  color: ${colors.text.black};
  clip-path: polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);

  ${mediaQueries.smallTablet} {
    width: 100%;
    clip-path: none;
    border-radius: 12px;
  }
`;

const Slots = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Slot = styled.div`
  flex: 1;
  min-width: 120px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary.white};
  border: 2px dashed ${colors.background.seaDark};
  border-radius: 14px;
  color: ${colors.primary.gray};
  opacity: 0.85;
`;

const SurfboardsImg = styled.img`
  width: min(450px, 100%);
  margin-top: 8px;
`;

export default Sponsors;
