import React, { useState } from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors, Header3, Body } from "src/lib/styles";
import { Towel } from "src/assets";
import { Starfish } from "src/components/hero/Decor";

const FAQS: { q: string; a: string }[] = [
  {
    q: "When and where is WEC?",
    a: "Dates and venue are being finalized — check back soon and follow our socials for the announcement.",
  },
  {
    q: "Who can participate?",
    a: "Any University of Waterloo engineering student, from 1A all the way to graduate studies. All skill levels welcome.",
  },
  {
    q: "Do I need a team?",
    a: "Most competitions are team-based (2–4 people), but you can register solo and we'll help match you with a team.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing! WEC is completely free for all participants thanks to our sponsors.",
  },
  {
    q: "How do I register?",
    a: "Registration opens closer to the event. Sign up to our mailing list and socials so you don't miss it.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <FAQSection id={SectionId.FAQ}>
      <TowelImg src={Towel} alt="" className="towel-left" />
      <TowelImg src={Towel} alt="" className="towel-right" />
      <Starfish className="faq-starfish" />

      <Content>
        <SectionHeading>FAQ</SectionHeading>
        <List>
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Item key={q} $open={isOpen}>
                <Question
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <Header3>{q}</Header3>
                  <Toggle $open={isOpen}>+</Toggle>
                </Question>
                <Answer $open={isOpen}>
                  <Body>{a}</Body>
                </Answer>
              </Item>
            );
          })}
        </List>
      </Content>
    </FAQSection>
  );
};

const FAQSection = styled(SectionWrapper)`
  position: relative;
  background: ${colors.background.sand};
  padding: 80px 6vw 120px;
  overflow: hidden;

  .towel-left,
  .towel-right {
    position: absolute;
    z-index: 0;
    width: 150px;
    opacity: 0.5;
    bottom: 60px;
  }
  .towel-left {
    left: 2%;
    transform: rotate(-8deg);
  }
  .towel-right {
    right: 2%;
    transform: rotate(8deg);
  }

  .faq-starfish {
    position: absolute;
    z-index: 0;
    top: 50px;
    left: 6%;
    width: 70px;
    transform: rotate(14deg);
  }

  ${mediaQueries.tablet} {
    .towel-left,
    .towel-right,
    .faq-starfish {
      display: none;
    }
  }
`;

const TowelImg = styled.img``;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div<{ $open: boolean }>`
  background: ${colors.primary.white};
  border-radius: 18px;
  border-top: 8px solid ${colors.accent.coral};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  background: transparent;
  border: 0;
  cursor: pointer;
  text-align: left;

  h3 {
    ${mediaQueries.tablet} {
      font-size: 16px;
    }
  }
`;

const Toggle = styled.span<{ $open: boolean }>`
  flex: 0 0 auto;
  font-family: "Castledown";
  font-size: 28px;
  line-height: 1;
  color: ${colors.accent.purple};
  transform: rotate(${({ $open }) => ($open ? "45deg" : "0deg")});
  transition: transform 0.2s ease;
`;

const Answer = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.25s ease;

  & > p {
    overflow: hidden;
    padding: ${({ $open }) => ($open ? "0 24px 22px" : "0 24px")};
    transition: padding 0.25s ease;
  }
`;

export default FAQ;
