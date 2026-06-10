import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import {
  colors,
  Title,
  Header3,
  Body,
  Overline,
  ButtonText,
  BodyBold,
} from "src/lib/styles";
import { Umbrella, Billboard, ArrowSign, FramedSign } from "src/assets";
import { Cloud, LifeRing, Starfish, Waves } from "src/components/hero/Decor";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@watengcomp.ca" },
];

const Hero: React.FC = () => {
  return (
    <HeroSection id={SectionId.HERO}>
      <Sky />
      <Cloud className="cloud" />
      <UmbrellaImg src={Umbrella} alt="WEC beach umbrella" />

      <ArrowSignWrapper>
        <img src={ArrowSign} alt="Directional signpost" />
        <ArrowLabel style={{ top: "18%" }}>DATE</ArrowLabel>
        <ArrowLabel style={{ top: "37%" }}>SOCIALS</ArrowLabel>
      </ArrowSignWrapper>

      <Center>
        <Eyebrow>WATERLOO ENGINEERING COMPETITION</Eyebrow>
        <Title>
          MAKE WAVES
          <br />
          THIS SUMMER
        </Title>
        <Tagline>
          Compete, build, and pitch your way through the biggest engineering
          showdown on campus.
        </Tagline>
        <Cta href={`#${SectionId.ABOUT}`}>
          <ButtonText>Explore Competitions</ButtonText>
        </Cta>
      </Center>

      <LifeRing className="lifering" />
      <Starfish className="starfish" />

      <BillboardWrapper>
        <img src={Billboard} alt="" />
        <BillboardContent>
          <Header3>WHO ARE WE</Header3>
          <Body>
            Waterloo's largest engineering competition — solving real-world
            challenges across design, programming &amp; more.
          </Body>
        </BillboardContent>
      </BillboardWrapper>

      <FramedSignWrapper>
        <img src={FramedSign} alt="" />
        <FramedContent>
          <Header3>LINKS</Header3>
          <LinkList>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <BodyBold>{label}</BodyBold>
              </a>
            ))}
          </LinkList>
        </FramedContent>
      </FramedSignWrapper>

      <Waves className="waves" />
    </HeroSection>
  );
};

const HeroSection = styled(SectionWrapper)`
  position: relative;
  min-height: 1000px;
  overflow: hidden;

  .cloud {
    position: absolute;
    z-index: 1;
    top: 7%;
    left: 6%;
    width: 160px;
  }

  .lifering {
    position: absolute;
    z-index: 3;
    top: 30%;
    left: 7%;
    width: 96px;
  }

  .starfish {
    position: absolute;
    z-index: 3;
    top: 73%;
    left: 47%;
    width: 64px;
    transform: rotate(-12deg);
  }

  .waves {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 180px;
    display: block;
  }

  ${mediaQueries.medium} {
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    padding: 0 0 160px;

    .cloud { width: 90px; top: 3vh; left: 6%; }
    .lifering { display: none; }
    .starfish { display: none; }
  }

  ${mediaQueries.largeMobile} {
    gap: 20px;
  }
`;

const Sky = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 52vh;
  background: linear-gradient(to bottom, ${colors.background.skyDark}, ${colors.background.skyLight});
`;

const Center = styled.div`
  position: absolute;
  z-index: 4;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: min(640px, 70vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;

  ${mediaQueries.medium} {
    position: static;
    transform: none;
    width: 86vw;
    margin-top: 24vh;
    gap: 14px;
  }
`;

const Eyebrow = styled(Overline)`
  width: 100%;
  max-width: 100%;
  letter-spacing: 1px;
  overflow-wrap: break-word;
  color: ${colors.accent.coralDark};

  ${mediaQueries.tablet} {
    font-size: 12px;
  }
`;

const Tagline = styled(Body)`
  width: 100%;
  max-width: 460px;
  color: #2a2a2a;
`;

const Cta = styled.a`
  margin-top: 6px;
  display: inline-flex;
  align-items: center;
  padding: 14px 30px;
  border-radius: 999px;
  background: ${colors.accent.purple};
  color: ${colors.primary.white};
  text-decoration: none;
  box-shadow: 0 8px 18px rgba(160, 143, 214, 0.45);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  p {
    color: ${colors.primary.white};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(160, 143, 214, 0.55);
  }
`;

const UmbrellaImg = styled.img`
  position: absolute;
  z-index: 2;
  top: 4%;
  right: 6%;
  width: 300px;
  height: auto;

  ${mediaQueries.medium} {
    top: 8vh;
    right: 4%;
    width: 150px;
  }

  ${mediaQueries.largeMobile} {
    top: 7vh;
    width: 120px;
  }
`;

const ArrowSignWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 40%;
  right: 7%;
  width: 220px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ${mediaQueries.medium} {
    display: none;
  }
`;

const ArrowLabel = styled(ButtonText)`
  position: absolute;
  left: 10%;
  width: 50%;
  text-align: center;
  font-size: 15px;
  color: ${colors.text.black};

  ${mediaQueries.tablet} {
    font-size: 13px;
  }
`;

const BillboardWrapper = styled.div`
  position: absolute;
  z-index: 4;
  top: 54%;
  left: 4%;
  width: 480px;
  max-width: 40vw;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ${mediaQueries.medium} {
    position: relative;
    width: 92%;
    max-width: 520px;
    margin: 0;
  }
`;

const BillboardContent = styled.div`
  position: absolute;
  top: 23%;
  left: 31%;
  width: 43%;
  height: 38%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;

  h3 {
    font-size: clamp(12px, 1.1vw, 17px);
  }

  p {
    font-size: clamp(8px, 0.78vw, 11px);
    line-height: 132%;
  }
`;

const FramedSignWrapper = styled.div`
  position: absolute;
  z-index: 4;
  top: 56%;
  right: 5%;
  width: 340px;
  max-width: 28vw;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ${mediaQueries.medium} {
    position: relative;
    width: 80%;
    max-width: 360px;
    margin: 0;
  }
`;

const FramedContent = styled.div`
  position: absolute;
  top: 21%;
  left: 30%;
  width: 42%;
  height: 44%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-size: clamp(13px, 1.2vw, 18px);
  }

  p {
    font-size: clamp(10px, 0.9vw, 14px);
  }
`;

const LinkList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  a {
    text-decoration: none;
    color: ${colors.text.black};
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${colors.accent.purple};
  }
`;

export default Hero;
