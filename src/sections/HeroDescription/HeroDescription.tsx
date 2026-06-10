import React from "react";
import styled from "styled-components";
import { DescriptionSign, SectionWrapper } from "src/components";
import { mediaQueries } from "src/lib/responsive";

const HeroDescription: React.FC = () => {
  return (
    <HeroDescriptionSection>
      <SignPosition>
        <DescriptionSign />
      </SignPosition>
    </HeroDescriptionSection>
  );
};

const HeroDescriptionSection = styled(SectionWrapper)`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  padding: 50px 0;
`;

const SignPosition = styled.div`
  width: min(94vw, 550px);

  ${mediaQueries.smallTablet} {
    width: min(96vw, 390px);
  }

  ${mediaQueries.largeMobile} {
    width: min(104vw, 360px);
  }
`;

export default HeroDescription;
