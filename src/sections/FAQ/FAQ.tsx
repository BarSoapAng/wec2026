import React, { useState } from "react";
import styled from "styled-components";
import { SectionWrapper, SectionHeading } from "src/components";
import { SectionId } from "../constants";
import { mediaQueries } from "src/lib/responsive";
import { colors, Header3, Body } from "src/lib/styles";
import { Towel } from "src/assets";
import { Starfish } from "src/components/hero/Decor/index";

type FAQAnswer = string | string[];

const FAQS: { q: string; a: FAQAnswer }[] = [
  {
    q: "Who can join WEC?",
    a: "Any undergraduate Waterloo engineering student that is on term in Spring 2026 may join!",
  },
  {
    q: "Why join WEC?",
    a: [
      "Enjoy FREE meals, swag, & networking sessions",
      "Be mentored (and potentially recruited) by industry professionals & discipline experts",
      "Develop an elaborate project you're proud of",
      "Compete for a chance to represent Waterloo engineering at provincials (OEC) & nationals (CEC)!",
    ],
  },
  {
    q: "Can I compete individually?",
    a: "You may compete individually. However, in competitions that allow teams of 4, competing individually is not recommended. If you would like to be matched to a team of other individual competitors, please indicate that on the sign-up form. Note that team matching is based on interest and not guaranteed.",
  },
  {
    q: "What should I bring to WEC?",
    a: "You may bring a laptop, charger, course notes, and any other reference material. Competition-specific materials will be provided.",
  },
  {
    q: "Who judges WEC?",
    a: "Industry professionals and Waterloo engineering professors will judge your projects. You will get a chance to receive direct feedback and guidance from our accomplished pool of judges!",
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
                  <AnswerContent $open={isOpen}>
                    {Array.isArray(a) ? (
                      <BulletList>
                        {a.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </BulletList>
                    ) : (
                      <Body>{a}</Body>
                    )}
                  </AnswerContent>
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
  padding: 50px 6vw;
  overflow: hidden;

  .towel-left,
  .towel-right {
    position: absolute;
    z-index: 0;
    width: 400px;
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
    padding: 50px 6vw;

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
  gap: 20px;
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
`;

const AnswerContent = styled.div<{ $open: boolean }>`
  overflow: hidden;
  padding: ${({ $open }) => ($open ? "0 24px 22px" : "0 24px")};
  transition: padding 0.25s ease;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 24px;
  color: ${colors.text.black};
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0%;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export default FAQ;
