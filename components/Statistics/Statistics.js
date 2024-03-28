import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <Wrapper>
      <Title>Advanced Statistics</Title>
      <Description>
        Track how your links are performing across the web with our <br />{" "}
        advanced statistics dashboard.
      </Description>
      <CardsContainer>
        <AccentLine />
        <Card>
          <CardImgContainer>
            <CardImg src={brandRecognition} />
          </CardImgContainer>
          <CardTitle>Brand Recognition</CardTitle>
          <CardDescription>
            Boost your brand recognition with each click. Generic links don’t{" "}
            <br /> mean a thing. Branded links help instil confidence in your
            content.
          </CardDescription>
        </Card>
        <Card>
          <CardImgContainer>
            <CardImg src={detailedRecords} />
          </CardImgContainer>
          <CardTitle>Detailed Records</CardTitle>
          <CardDescription>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </CardDescription>
        </Card>
        <Card>
          <CardImgContainer>
            <CardImg src={fullyCustomizable} />
          </CardImgContainer>
          <CardTitle>Fully Customizable</CardTitle>
          <CardDescription>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </CardDescription>
        </Card>
      </CardsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 120px auto 0;
  width: 90%;
  max-width: ${1110 / 16}rem;
`;

const AccentLine = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 50%;
  height: 8px;
  background: ${COLORS.cyan};
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${40 / 16}rem;
  line-height: ${48 / 16}rem;
  letter-spacing: -1px;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.veryDarkBlue};
  margin-bottom: ${18 / 16}rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: ${18 / 16}rem;
  line-height: ${32 / 16}rem;
  letter-spacing: 0.12px;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.grayishViolet};
  margin-bottom: ${56 / 16}rem;
`;

const CardsContainer = styled.div`
  min-height: ${400 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 44px;
  position: relative;
`;

const Card = styled.div`
  padding: 77px 32px 41px;
  background: ${COLORS.white};
  width: ${350 / 16}rem;
  position: relative;

  &:nth-of-type(2) {
    align-self: flex-start;
  }

  &:nth-of-type(3) {
    align-self: center;
  }

  &:nth-of-type(4) {
    align-self: flex-end;
  }
`;

const CardImgContainer = styled.div`
  background: ${COLORS.veryDarkViolet};
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: -44px;
`;

const CardImg = styled.img``;

const CardTitle = styled.h3`
  font-size: ${22 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.veryDarkBlue};
  margin-bottom: ${12 / 16}rem;
`;

const CardDescription = styled.p`
  font-size: ${15 / 16}rem;
  line-height: ${26 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.grayishViolet};
`;

export default Statistics;
