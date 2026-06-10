import React from "react";
import styled from "styled-components";
import { type Competitions, CompetitionDescription } from "./constants";
import { mediaQueries } from "src/lib/responsive";
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
        <DescriptionTitle>{competition.title}</DescriptionTitle>
        <DescriptionBody>{competition.description}</DescriptionBody>
      </DescriptionText>
    </DescriptionWrapper>
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  ${mediaQueries.medium} {
    justify-content: center;
  }
`;

const DescriptionText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: min(100%, 560px);
  margin-right: 5%;
  padding: 34px 42px 38px;
  overflow: hidden;
  border: 3px solid ${colors.secondary.crimsonDark};
  border-radius: 28px;
  background:
    linear-gradient(135deg, ${colors.primary.white} 0%, ${colors.background.sand} 100%);
  box-shadow:
    10px 10px 0 ${colors.primary.purpleLight},
    0 16px 36px #0000001c;

  &::after {
    content: "";
    position: absolute;
    right: 48px;
    bottom: 26px;
    width: 92px;
    height: 12px;
    border-radius: 999px;
    background: ${colors.primary.purple};
    opacity: 0.22;
    transform: rotate(-7deg);
  }

  ${mediaQueries.medium} {
    width: min(100%, 680px);
    margin-right: 0;
  }

  ${mediaQueries.smallTablet} {
    padding: 26px 24px 30px;
    border-radius: 20px;
    box-shadow:
      6px 6px 0 ${colors.primary.purpleLight},
      0 12px 24px #00000017;
  }
`;

const DescriptionTitle = styled(Header3)`
  position: relative;
  z-index: 1;
  color: ${colors.secondary.crimsonDark};
`;

const DescriptionBody = styled(Body)`
  position: relative;
  z-index: 1;
  max-width: 52ch;
  color: ${colors.text.black};
`;

export default Description;
