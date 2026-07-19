import React from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors } from "src/lib/styles";
import { Sun } from "src/components/hero/Decor/index";

const SCHEDULE_ROWS: [string, string[]][] = [
  ["8:00 AM", ["Arrival & Check-in"]],
  [
    "8:30 AM",
    ["Welcome Ceremony + C&D Breakfast", "Competitor Briefings"],
  ],
  [
    "9:00 AM",
    ["Competition time + Question period begins"],
  ],
  ["9:30 AM", ["Competition time", "Question period ends at 9:15 AM"]],
  ["12:00 PM", ["Lunch"]],
  [
    "1:00 PM",
    ["Competition time"],
  ],
  [
    "3:00 PM",
    [
      "Submission deadline at 3:00 PM",
      "All competitors must be in Floor 2 Event Space",
      "Presentation order announced at 3:15 PM",
    ],
  ],
  ["3:30 PM", ["Judging time"]],
  ["6:30 PM", ["Networking Reception + Dinner"]],
  ["7:00 PM", ["Awards Ceremony"]],
  ["7:30 PM", ["More Networking!"]],
];

const Schedule: React.FC = () => {
  return (
    <ScheduleSection id={SectionId.SCHEDULE}>
      <Sun className="schedule-sun" />
      <SectionHeading>SCHEDULE</SectionHeading>

      <ScheduleCard>
        <ScheduleTable>
          <thead>
            <tr>
              <th>TIME</th>
              <th>EVENT</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE_ROWS.map(([time, activities]) => (
              <tr key={time}>
                <TimeCell>{time}</TimeCell>
                <Cell>
                  {activities.map((item) => (
                    <CellContent key={item}>{item}</CellContent>
                  ))}
                </Cell>
              </tr>
            ))}
          </tbody>
        </ScheduleTable>
      </ScheduleCard>
    </ScheduleSection>
  );
};

const ScheduleSection = styled(SectionWrapper)`
  position: relative;
  background: ${colors.background.sand};
  padding: 50px 6vw;
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

const ScheduleCard = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;
  padding: 0;
  background: transparent;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
`;

const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 10px;
  background: ${colors.primary.white};
  color: ${colors.text.black};

  th,
  td {
    padding: 18px 24px;
    text-align: center;
    vertical-align: top;
    border-bottom: 1px solid ${colors.background.skyDark};
  }

  th {
    background: ${colors.accent.coral};
    color: ${colors.primary.white};
    font-family: "Castledown";
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0.04em;
  }

  th:first-child {
    width: 170px;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }

  tbody tr:nth-child(even) td {
    background: ${colors.background.skyLight};
  }

  tbody tr:hover td {
    background: ${colors.background.seaLight};
  }

  ${mediaQueries.tablet} {
    th,
    td {
      padding: 14px 16px;
    }

    th {
      font-size: 15px;
    }
  }

  ${mediaQueries.mediumTablet} {
    display: block;
    background: transparent;

    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
    }

    tbody tr {
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;
      background: ${colors.primary.white};
    }

    tbody tr:nth-child(even) td {
      background: ${colors.primary.white};
    }

    tbody tr:hover td {
      background: ${colors.primary.white};
    }

    td {
      min-height: 0;
      padding: 12px 16px;
      position: relative;
      border-bottom: 0;
      font-size: 14px;
      line-height: 145%;
    }
  }
`;

const TimeCell = styled.td`
  width: 170px;
  background: ${colors.background.skyLight};
  border-right: 1px solid ${colors.background.skyDark};
  color: ${colors.accent.coralDark};
  font-family: "Castledown";
  font-size: 18px;
  font-weight: 900;
  white-space: nowrap;

  ${mediaQueries.mediumTablet} {
    width: auto;
    padding: 12px 14px 8px;
    background: ${colors.accent.coral} !important;
    border-right: 0;
    color: ${colors.primary.white};
    font-size: 17px;

  }
`;

const Cell = styled.td`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
`;

const CellContent = styled.span`
  display: block;
  padding: 3px 0;
  font-weight: 700;

  ${mediaQueries.mediumTablet} {
    padding: 3px 0;
  }
`;

export default Schedule;
