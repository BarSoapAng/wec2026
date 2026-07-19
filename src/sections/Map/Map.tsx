import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { Body } from "src/lib/styles";
import { MapImage } from "src/assets";

const Map: React.FC = () => {
  return (
    <MapSection id={SectionId.MAP}>
      <SectionHeading>MAP</SectionHeading>
      <Description>
        WEC will run exclusively within E7, with competition rooms located on
        floor 4.
      </Description>
      <MapFrame>
        <MapImageElement src={MapImage} alt="Floor 4 map showing WEC competition rooms" />
      </MapFrame>
    </MapSection>
  );
};

const MapSection = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: transparent;
  padding: 50px 6vw;
  overflow: hidden;

  ${mediaQueries.tablet} {
    padding: 50px 4vw;
  }
`;

const Description = styled(Body)`
  max-width: 650px;
  text-align: center;
`;

const MapFrame = styled.div`
  width: 100%;
  max-width: 1040px;
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 18px;
  box-shadow: none;
`;

const MapImageElement = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export default Map;
