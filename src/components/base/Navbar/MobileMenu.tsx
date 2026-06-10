import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { mediaQueries } from "src/lib/responsive";
import { BodyBold, colors } from "src/lib/styles";
import { navItems, SectionId } from "src/sections/constants";
import styled from "styled-components";

const DROPDOWN_ANIMATION_MS = 250;

const MobileMenu = () => {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const clearActiveElement = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    clearActiveElement();
    setIsOpen(false);
    menuButtonRef.current?.focus();

    window.setTimeout(() => {
      clearActiveElement();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }, DROPDOWN_ANIMATION_MS);
  };

  return (
    <Container>
      <MenuButton
        ref={menuButtonRef}
        type="button"
        $isOpen={isOpen}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => {
          clearActiveElement();
          setIsOpen((currentIsOpen) => !currentIsOpen);
        }}
      >
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </MenuButton>
      <Dropdown $isOpen={isOpen} aria-hidden={!isOpen}>
        <LogoLink
          href={`#${SectionId.HERO}`}
          onMouseDown={(event) => event.preventDefault()}
          onClick={(event) => handleLinkClick(event, `#${SectionId.HERO}`)}
          tabIndex={isOpen ? 0 : -1}
        >
          WEC
        </LogoLink>
        {navItems.map((item) => (
          <DropdownLink
            href={item.href}
            key={item.href}
            onMouseDown={(event) => event.preventDefault()}
            onClick={(event) => handleLinkClick(event, item.href)}
            tabIndex={isOpen ? 0 : -1}
          >
            <BodyBold>{item.label}</BodyBold>
          </DropdownLink>
        ))}
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: none;

  ${mediaQueries.largeMobile} {
    display: block;
  }
`;

const MenuButton = styled.button<{ $isOpen: boolean }>`
  position: relative;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  gap: 5px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
`;

const MenuLine = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 999px;
  background: currentColor;
  color: ${colors.secondary.crimsonDark};
  transition:
    opacity ${DROPDOWN_ANIMATION_MS}ms ease,
    transform ${DROPDOWN_ANIMATION_MS}ms ease,
    color ${DROPDOWN_ANIMATION_MS}ms ease;

  ${MenuButton}[aria-expanded="true"] & {
    color: ${colors.secondary.crimsonDark};
  }

  ${MenuButton}[aria-expanded="true"] &:first-child {
    transform: translateY(8px) rotate(45deg);
  }

  ${MenuButton}[aria-expanded="true"] &:nth-child(2) {
    opacity: 0;
  }

  ${MenuButton}[aria-expanded="true"] &:last-child {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: min(100vw, 430px);
  max-height: ${({ $isOpen }) => ($isOpen ? "100dvh" : "0")};
  padding: 112px 28px 32px;
  background: ${colors.secondary.redPastel};
  overflow: hidden;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transform: ${({ $isOpen }) => ($isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition:
    max-height ${DROPDOWN_ANIMATION_MS}ms ease,
    opacity ${DROPDOWN_ANIMATION_MS}ms ease,
    transform ${DROPDOWN_ANIMATION_MS}ms ease;
`;

const LogoLink = styled.a`
  position: absolute;
  top: 24px;
  left: 24px;
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

const DropdownLink = styled.a`
  padding: 8px 0;
  color: ${colors.secondary.crimsonDark};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${colors.secondary.crimson};
  }
`;

export default MobileMenu;
