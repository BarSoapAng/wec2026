import React from "react";
import styled from "styled-components";
import { PurpleSign } from "src/assets";
import { Body, BodyBold } from "src/lib/styles";

type DescriptionSignProps = {
  text?: string;
  className?: string;
};

const placeholderText =
  "WHO ARE WE jiaoisjroiajsfoijfoajs joasjojdojosam ansd has,djha lkdhalkjhdalkj jhaslkjdjhalksjhdlka sjhdlkasjh aksjd hasklsjd halskjdj halksjd haksljd";

const DescriptionSign: React.FC<DescriptionSignProps> = ({
  text = placeholderText,
  className,
}) => {
  return (
    <SignWrapper className={className}>
      <SignImage src={PurpleSign} alt="" aria-hidden="true" />
      <TextBox>
        <SignTextTitle>WHO ARE WE</SignTextTitle>
        <SignText>{text}</SignText>
      </TextBox>
    </SignWrapper>
  );
};

const SignWrapper = styled.div`
  position: relative;
  width: min(100%, 620px);
  isolation: isolate;
`;

const SignImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

const TextBox = styled.div`
  position: absolute;
  justify-content: center;
  width: 94.5%;
  height: 47.5%;
  padding: 5% 7%;
  pointer-events: none;
  top: 11.5%;
  left: 4.5%;
  transform: skewX(2deg) skewY(-1deg);
`;

const SignTextTitle = styled(BodyBold)`
  color: inherit;
  text-align: center;
  overflow-wrap: anywhere;
  margin-bottom: 10px;
`;

const SignText = styled(Body)`
  color: inherit;
  text-align: center;
  overflow-wrap: anywhere;
  margin-bottom: 10px;
`;

export default DescriptionSign;
