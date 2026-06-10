import React from "react";
import styled from "styled-components";
import { Title } from "src/lib/styles";
import { Shell } from "src/components/hero/Decor";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionHeading: React.FC<Props> = ({ children, className }) => (
  <Wrapper className={className}>
    <Shell className="heading-shell" />
    <Title>{children}</Title>
    <Shell className="heading-shell flip" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;

  .heading-shell {
    width: 38px;
    flex: 0 0 auto;
  }

  .heading-shell.flip {
    transform: scaleX(-1);
  }
`;

export default SectionHeading;
