import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors, Body, BodyBold } from "src/lib/styles";
import {
  Surfboards,
  Cellect,
  Cocoa,
  Communitech,
  Hatch,
  Innoxtra,
  Octopodi,
  Parsons,
  RubberDuck,
  Sense,
  Sff,
  UwEng,
  Westinghouse,
} from "src/assets";

type SponsorItem = {
  name: string;
  logo?: string;
  isTextOnly?: boolean;
};

const SPONSORS: SponsorItem[] = [
  { name: "Sanford Fleming Foundation", logo: Sff },
  { name: "Faculty of Engineering", logo: UwEng },
  { name: "Cellect", logo: Cellect },
  { name: "Cocoa", logo: Cocoa },
  { name: "Communitech", logo: Communitech },
  { name: "Hatch", logo: Hatch },
  { name: "Innoxtra", logo: Innoxtra },
  { name: "Octopodi", logo: Octopodi },
  { name: "Parsons", logo: Parsons },
  { name: "RubberDuck", logo: RubberDuck },
  { name: "Sense", logo: Sense },
  { name: "Westinghouse", logo: Westinghouse },
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

        <SponsorsList>
          {SPONSORS.map((sponsor) => (
            <Slot key={sponsor.name}>
              {sponsor.isTextOnly ? (
                <BodyBold>{sponsor.name}</BodyBold>
              ) : (
                <SponsorLogo src={sponsor.logo} alt={sponsor.name} />
              )}
            </Slot>
          ))}
        </SponsorsList>

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

const SponsorsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 4px;

  ${mediaQueries.mediumTablet} {
    grid-template-columns: 1fr;
  }
`;

const Slot = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary.white};
  border: 2px dashed ${colors.background.seaDark};
  border-radius: 14px;
  padding: 18px 20px;
  color: ${colors.text.black};
  opacity: 0.85;
`;

const SponsorLogo = styled.img`
  max-width: 100%;
  max-height: 56px;
  object-fit: contain;
  display: block;
`;

const SurfboardsImg = styled.img`
  width: min(450px, 100%);
  margin-top: 8px;
`;

export default Sponsors;
