import React from "react";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { WoodSign } from "src/assets";
import { Body, colors } from "src/lib/styles";

type ApplicationSignProps = {
  dateText?: string;
  applyHref?: string;
  instagramHref?: string;
  className?: string;
};

const ApplicationSign: React.FC<ApplicationSignProps> = ({
  dateText = "June 1, 2026",
  applyHref = "https://google.com",
  instagramHref = "https://instagram.com",
  className,
}) => {
  return (
    <SignWrapper className={className}>
      <SignImage src={WoodSign} alt="" aria-hidden="true" draggable={false} />
      <SignBoard $x={8.62} $y={0}>
        <SignText>{dateText}</SignText>
      </SignBoard>
      <SignBoard $x={0} $y={20.34}>
        <SignLink href={applyHref}>apply</SignLink>
      </SignBoard>
      <SignBoard $x={8.62} $y={40.68}>
        <SocialLink href={instagramHref} aria-label="Instagram">
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

const SignBoard = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  top: ${({ $y }) => $y}%;
  left: ${({ $x }) => $x}%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 91.38%;
  height: 15.59%;
  padding: 3% 12%;
  background-color: ${colors.background.skyLight};
`;

const SignText = styled(Body)`
  color: ${colors.text.black};
  font-size: clamp(18px, 5vw, 32px);
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
`;

const SignLink = styled(SignText).attrs({ as: "a" })`
  color: ${colors.text.black};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.black};
  font-size: clamp(26px, 7vw, 44px);
  line-height: 1;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: ${colors.secondary.crimsonDark};
  }
`;

export default ApplicationSign;
