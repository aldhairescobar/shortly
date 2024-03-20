import React from "react";
import styled from "styled-components";
import illustrationWorking from "../../images/illustration-working.svg";
import { COLORS, WEIGHTS } from "../../constants";

function Hero() {
  return (
    <Wrapper>
      <Intro>
        <Title>More than just shorter links</Title>
        <Description>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Description>
        <HeroButton>Get Started</HeroButton>
      </Intro>
      <Image src={illustrationWorking} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 78px auto 0;
  width: 90%;
  max-width: ${1108 / 16}rem;
  display: flex;
  align-items: center;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: ${80 / 16}rem;
  line-height: ${90 / 16}rem;
  letter-spacing: -2px;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.veryDarkBlue};
  margin-bottom: ${6 / 16}rem;
`;

const Description = styled.p`
  max-width: ${540 / 16}rem;
  font-size: ${22 / 16}rem;
  line-height: ${36 / 16}rem;
  letter-spacing: 0.15px;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.grayishViolet};
  margin-bottom: ${38 / 16}rem;
`;

const HeroButton = styled.a`
  display: block;
  background: ${COLORS.cyan};
  color: ${COLORS.white};
  font-size: ${20 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  padding: ${14 / 16}rem ${40 / 16}rem;
  border-radius: 28px;
`;

const Image = styled.img`
  width: 733px;
  position: relative;
  margin-right: -288px;
`;

export default Hero;
