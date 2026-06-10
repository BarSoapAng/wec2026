import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SectionId } from "../constants";
import { colors, ButtonText } from "src/lib/styles";
import { mediaQueries } from "src/lib/responsive";

const NAV_ITEMS: { label: string; id: SectionId }[] = [
  { label: "About", id: SectionId.ABOUT },
  { label: "Sponsors", id: SectionId.SPONSORS },
  { label: "Schedule", id: SectionId.SCHEDULE },
  { label: "FAQ", id: SectionId.FAQ },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled} id={SectionId.NAVBAR}>
      <Inner>
        <Logo href={`#${SectionId.HERO}`}>WEC</Logo>
        <Links>
          {NAV_ITEMS.map(({ label, id }) => (
            <NavLink key={id} href={`#${id}`}>
              <ButtonText>{label}</ButtonText>
            </NavLink>
          ))}
        </Links>
      </Inner>
    </Bar>
  );
};

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 14px 24px;

  ${mediaQueries.largeMobile} {
    padding: 10px 14px;
  }
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(252, 229, 201, 0.85)" : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(8px)" : "none")};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none"};
  transition: background 0.25s ease, box-shadow 0.25s ease;
`;

const Inner = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-family: "Castledown";
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${colors.accent.purple};
  text-decoration: none;

  ${mediaQueries.largeMobile} {
    font-size: 22px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 28px;

  ${mediaQueries.tablet} {
    gap: 16px;
  }

  ${mediaQueries.mobile} {
    gap: 12px;
  }
`;

const NavLink = styled.a`
  color: ${colors.text.black};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.accent.purple};
  }

  ${mediaQueries.tablet} {
    p {
      font-size: 14px;
    }
  }

  ${mediaQueries.mobile} {
    p {
      font-size: 12px;
    }
  }
`;

export default Navbar;
