import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors, ButtonText, Body, Caption } from "src/lib/styles";
import { WaveDivider } from "src/components/hero/Decor/index";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/uwengcomp/" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:wec.b@engsoc.uwaterloo.ca" },
];

const Footer: React.FC = () => {
  return (
    <FooterSection id={SectionId.FOOTER}>
      <WaveDivider className="footer-wave" fill={colors.background.seaLight} />
      <Inner>
        <Brand>
          <Logo>WEC</Logo>
          <Body>Waterloo Engineering Competition</Body>
        </Brand>

        <Cols>
          <Col>
            <ButtonText>CONNECT</ButtonText>
            {SOCIALS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Body>{label}</Body>
              </a>
            ))}
          </Col>
        </Cols>
      </Inner>

      <Bottom>
        <Caption>© {2026} Waterloo Engineering Competition. Made with love by EngSoc 🏖️</Caption>
      </Bottom>
    </FooterSection>
  );
};

const FooterSection = styled(SectionWrapper)`
  position: relative;
  background: linear-gradient(to bottom, ${colors.background.sea}, ${colors.background.seaDark});
  padding: 50px 6vw;
  color: ${colors.primary.white};

  .footer-wave {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 60px;
    display: block;
    transform: rotate(180deg);
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;

  p {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const Logo = styled.span`
  font-family: "Castledown";
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 3px;
`;

const Cols = styled.div`
  display: flex;
  gap: 64px;

  ${mediaQueries.smallTablet} {
    gap: 40px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${colors.primary.white};
  }
`;

const Bottom = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 48px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.85);
  }
`;

export default Footer;
