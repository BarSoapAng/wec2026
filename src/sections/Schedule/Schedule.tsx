import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors, Header3, Body, ButtonText } from "src/lib/styles";
import { Sun } from "src/components/hero/Decor";

const DAYS = ["SAT", "SUN"];
const PLACEHOLDER_ROWS = [9, 10, 11, 12, 1, 2];

const Schedule: React.FC = () => {
  return (
    <ScheduleSection id={SectionId.SCHEDULE}>
      <Sun className="schedule-sun" />
      <SectionHeading>SCHEDULE</SectionHeading>

      <BoardWrapper>
        <Board>
          <Columns>
            {DAYS.map((day) => (
              <Column key={day}>
                <Header3>{day}</Header3>
                {PLACEHOLDER_ROWS.map((_, i) => (
                  <Row key={i} />
                ))}
              </Column>
            ))}
          </Columns>
          <Stamp>
            <ButtonText>COMING SOON</ButtonText>
          </Stamp>
        </Board>
        <Posts>
          <Post />
          <Post />
        </Posts>
      </BoardWrapper>

      <Note>
        The full weekend schedule drops closer to the event — keep an eye on our
        socials!
      </Note>
    </ScheduleSection>
  );
};

const ScheduleSection = styled(SectionWrapper)`
  position: relative;
  background: ${colors.background.sand};
  padding: 80px 6vw 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  overflow: hidden;

  .schedule-sun {
    position: absolute;
    z-index: 0;
    top: 40px;
    right: 6%;
    width: 110px;
    opacity: 0.85;

    ${mediaQueries.medium} {
      width: 80px;
      top: 24px;
    }
  }
`;

const BoardWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Board = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(160deg, #d39a5c, #b9803f);
  border: 10px solid #9c6a31;
  border-radius: 18px;
  padding: 36px 28px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);

  ${mediaQueries.tablet} {
    padding: 24px 16px;
  }
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  filter: blur(1px);
  opacity: 0.65;

  ${mediaQueries.tablet} {
    gap: 16px;
  }
`;

const Column = styled.div`
  background: ${colors.primary.white};
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    text-align: center;
  }
`;

const Row = styled.div`
  height: 22px;
  border-radius: 6px;
  background: ${colors.background.sandDark};
`;

const Stamp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-8deg);
  padding: 14px 28px;
  background: ${colors.accent.coral};
  border: 3px solid ${colors.primary.white};
  border-radius: 14px;
  color: ${colors.primary.white};
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

  p {
    color: ${colors.primary.white};
    font-size: 28px;

    ${mediaQueries.tablet} {
      font-size: 20px;
    }
  }
`;

const Posts = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 0 12%;
`;

const Post = styled.div`
  width: 26px;
  height: 70px;
  background: linear-gradient(90deg, #c98a4b, #a9712f);
  border-radius: 0 0 6px 6px;
`;

const Note = styled(Body)`
  position: relative;
  z-index: 1;
  max-width: 520px;
  text-align: center;
  color: ${colors.primary.gray};
`;

export default Schedule;
