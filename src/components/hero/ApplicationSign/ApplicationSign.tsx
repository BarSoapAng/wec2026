import React from "react";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { WoodSign } from "src/assets";
import { mediaQueries } from "src/lib/responsive";
import { Header3, colors } from "src/lib/styles";

type ApplicationSignProps = {
  dateText?: string;
  applyHref?: string;
  instagramHref?: string;
  className?: string;
};

const ApplicationSign: React.FC<ApplicationSignProps> = ({
  dateText = "July 19, 2026",
  applyHref = "https://forms.gle/3qWRKgpqZURWYXxU6",
  instagramHref = "https://www.instagram.com/uwengcomp/",
  className,
}) => {
  return (
    <SignWrapper className={className}>
      <SignImage src={WoodSign} alt="" aria-hidden="true" draggable={false} />
      <SignBoard $x={10} $y={0.1}>
        <SignText>{dateText}</SignText>
      </SignBoard>
      <SignBoard $x={11.5} $y={20.2}>
        <SignLink href={applyHref} target="_blank" rel="noreferrer">
          Apply by July 12, 2026 {"->"}
        </SignLink>
      </SignBoard>
      <SignBoard $x={10} $y={40.7}>
        <SocialLink href={instagramHref} aria-label="Instagram" target="_blank" rel="noreferrer">
          <FaInstagram aria-hidden="true" focusable="false" />
        </SocialLink>
      </SignBoard>
    </SignWrapper>
  );
};

const SignWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: min(100%, 499px);
`;

const SignImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
  user-select: none;
`;

const SignBoard = styled.div<{
  $x: number;
  $y: number;
  $skewX?: number;
  $skewY?: number;
}>`
  position: absolute;
  top: ${({ $y }) => $y}%;
  left: ${({ $x }) => $x}%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 80%;
  height: 15%;
  padding: 0 2%;
  transform: skewX(-6deg);
  gap: 10px;
`;

const SignText = styled(Header3)`
  color: ${colors.text.black};
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
`;

const SignLink = styled(SignText).attrs({ as: "a" })`
  position: relative;
  display: inline-block;
  color: ${colors.text.black};
  text-decoration: none;
  transition: color ease 0.1s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    color: ${colors.secondary.crimsonDark};
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }
`;

const SocialLink = styled(SignLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.black};
  font-size: 34px;
  line-height: 1;
  transform: skewX(6deg);

  ${mediaQueries.tablet} {
    font-size: 26px;
  }
`;

export default ApplicationSign;
