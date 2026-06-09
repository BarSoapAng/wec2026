import React from "react";
import styled from "styled-components";
import { type Competitions, CompetitionDescription } from "./constants";
import { colors, Body, Header3 } from "src/lib/styles";

type DescriptionProps = {
  selectedCompetition: Competitions;
};

const Description: React.FC<DescriptionProps> = ({
  selectedCompetition,
}) => {
  const competition = CompetitionDescription[selectedCompetition];

  return (
    <DescriptionWrapper>
      <DescriptionText>
        <Header3>{competition.title}</Header3>
        <Body>{competition.description}</Body>
      </DescriptionText>
    </DescriptionWrapper>
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 5%;
  background-color: ${colors.primary.white};
  padding: 30px 40px;
  border-radius: 2rem;
`;

export default Description;
