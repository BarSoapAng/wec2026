import React from "react";
import styled from "styled-components";
import { PurpleSign } from "src/assets";
import { Body, BodyBold } from "src/lib/styles";
import { useDeviceSize } from "src/lib/useDeviceSize";

type DescriptionSignProps = {
  text?: string;
  className?: string;
};

const descriptionText =
  "Within Waterloo's undergraduate engineering competition, teams tackle  various engineering challenges, with top teams advancing to OEC and CEC.";
const descriptionTextMobile =
  "Teams tackle  various engineering challenges, with top teams advancing to OEC and CEC.";

const DescriptionSign: React.FC<DescriptionSignProps> = ({
  text,
  className,
}) => {
  const isMobile = useDeviceSize("smallTablet");
  const signText = text ?? (isMobile ? descriptionTextMobile : descriptionText);

  return (
    <SignWrapper className={className}>
      <SignImage src={PurpleSign} alt="" aria-hidden="true" draggable={false} />
      <TextBox>
        <SignTextTitle>WHAT IS WEC?</SignTextTitle>
        <SignText>{signText}</SignText>
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
  pointer-events: none;
  user-select: none;
`;

const TextBox = styled.div`
  position: absolute;
  justify-content: center;
  align-content: center;
  width: 94.5%;
  height: 47.5%;
  padding: 5% 15%;
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
