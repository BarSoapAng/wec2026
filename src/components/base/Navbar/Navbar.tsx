import React, { useEffect, useRef, useState } from "react";
import { navItems, SectionId } from "src/sections/constants";
import { mediaQueries } from "src/lib/responsive";
import { BodyBold, colors } from "src/lib/styles";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";

const NAVBAR_HEIGHT_PX = 72;

const Navbar: React.FC = () => {
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      setIsHidden(isScrollingDown && currentScrollY > NAVBAR_HEIGHT_PX);
      lastScrollY.current = Math.max(currentScrollY, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container $isHidden={isHidden} aria-label="Primary navigation">
      <InnerContainer>
        <LogoLink href={`#${SectionId.HERO}`}>WEC</LogoLink>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink href={item.href} key={item.href}>
              <BodyBold>{item.label}</BodyBold>
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenu />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.nav<{ $isHidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: ${NAVBAR_HEIGHT_PX}px;
  padding: 16px 24px;
  background: linear-gradient(
    180deg,
    ${colors.secondary.redPastel} 0%,
    ${colors.secondary.redPastel}00 100%
  );
  transform: ${({ $isHidden }) =>
    $isHidden ? `translateY(-${NAVBAR_HEIGHT_PX}px)` : "translateY(0)"};
  transition: transform 250ms ease;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1200px);
  gap: 32px;
`;

const LogoLink = styled.a`
  color: ${colors.secondary.crimsonDark};
  font-family: "Castledown";
  font-size: 28px;
  font-weight: 900;
  line-height: 1;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${colors.secondary.crimson};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  ${mediaQueries.largeMobile} {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${colors.secondary.crimsonDark};
  text-decoration: none;
  transition: color 0.2s ease;

  && * {
    color: inherit;
  }

  &:hover,
  &:focus-visible {
    color: ${colors.secondary.crimson};
  }
`;

export default Navbar;
