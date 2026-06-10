import React from "react";
import styled from "styled-components";
import { PurpleSign } from "src/assets";
import { Body } from "src/lib/styles";

type DescriptionSignProps = {
  text?: string;
  className?: string;
};

const placeholderText =
  "WHO ARE WE jiaoisjroiajsfoijfoajs joasjojdojosa";

const DescriptionSign: React.FC<DescriptionSignProps> = ({
  text = placeholderText,
  className,
}) => {
  return (
    <SignWrapper className={className}>
      <SignImage src={PurpleSign} alt="" aria-hidden="true" />
      <TextBox>
        <SignText>{text}</SignText>
      </TextBox>
    </SignWrapper>
  );
};

const SignWrapper = styled.div`
  display: grid;
  width: min(100%, 620px);
  position: relative;
  isolation: isolate;
`;

const SignImage = styled.img`
  grid-area: 1 / 1;
  display: block;
  width: 100%;
  height: auto;
`;

const TextBox = styled.div`
  grid-area: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: blue;
  padding: 16% 14% 26%;
  pointer-events: none;
`;

const SignText = styled(Body)`
  max-width: 100%;
  color: inherit;
  font-size: clamp(20px, 5vw, 42px);
  line-height: 1.25;
  text-align: center;
  overflow-wrap: anywhere;
`;

export default DescriptionSign;
