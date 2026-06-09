import React, { useState } from "react";
import styled from "styled-components";
import { AboutCamera } from "src/assets";
import { mediaQueries } from "src/lib/responsive";
import { colors } from "src/lib/styles";
import {
  type Competitions,
  CompetitionDescription,
  CompetitionsList,
} from "./constants";
import Description from "./Description";

const Camera: React.FC = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<Competitions>("juniorSeniorDesign");
  const selectedCompetitionIndex = CompetitionsList.indexOf(selectedCompetition);

  const showPreviousCompetition = () => {
    const previousIndex =
      (selectedCompetitionIndex - 1 + CompetitionsList.length) %
      CompetitionsList.length;

    setSelectedCompetition(CompetitionsList[previousIndex]);
  };

  const showNextCompetition = () => {
    const nextIndex = (selectedCompetitionIndex + 1) % CompetitionsList.length;

    setSelectedCompetition(CompetitionsList[nextIndex]);
  };

  return (
    <CameraScene>
      <CameraWithButtons>
        <Button
          aria-label="Show previous competition"
          onClick={showPreviousCompetition}
          type="button"
        >
          {"<"}
        </Button>
        <CameraWrapper>
          <CompetitionImage src={CompetitionDescription[selectedCompetition].image} />
          <CameraImage src={AboutCamera} />
        </CameraWrapper>
        <Button
          aria-label="Show next competition"
          onClick={showNextCompetition}
          type="button"
        >
          {">"}
        </Button>
      </CameraWithButtons>
      <Description selectedCompetition={selectedCompetition} />
    </CameraScene>
  );
};

const CameraScene = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-height: 980px;
  max-width: 2000px;
  margin: auto;
  gap: 50px;
  padding: 5%;
  
  ${mediaQueries.medium} {
    flex-direction: column;
  }
`;

const CameraWithButtons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 100%;
  max-width: 1000px;
  height: auto;

  ${mediaQueries.medium} {
    margin: 0;
    width: 100%;
  }
`;

const CameraWrapper = styled.div `
  position: relative;
  width: 90%;
  aspect-ratio: 1366 / 768;
`;

const CameraImage = styled.img`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const CompetitionImage = styled.img`
  position: absolute;
  z-index: 0;
  object-fit: cover;
  overflow: clip;
  left: 6%;
  top: 15%;
  width: 61%;
  height: 80%;
`;

const Button = styled.button`
  position: relative;
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  line-height: 1;
  cursor: pointer;
  font-size: 32px;
  font-weight: 900;
  color: ${colors.text.black};

  &:hover,
  &:focus-visible {
    color: ${colors.primary.gray};
  }
`;

export default Camera;
