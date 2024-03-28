import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import bgShortenDesktop from "../../images/bg-shorten-desktop.svg";

function ShortenBar() {
  return (
    <Wrapper>
      <div>
        <FormContainer>
          <Form>
            <TextInput type="text" placeholder="Shorten a link here..." />
            <FormButton>Shorten It!</FormButton>
          </Form>
        </FormContainer>
        <ResultsList>
          <ResultItem>
            <UserUrl>https://www.frontendmentor.io</UserUrl>
            <ResultUrl>https://rel.ink/k4lKyk</ResultUrl>
            <ButtonResult>Copy</ButtonResult>
          </ResultItem>

          <ResultItem>
            <UserUrl>https://www.frontendmentor.io</UserUrl>
            <ResultUrl>https://rel.ink/k4lKyk</ResultUrl>
            <ButtonResult>Copy</ButtonResult>
          </ResultItem>
        </ResultsList>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: ${1110 / 16}rem;
`;

const FormContainer = styled.div`
  background-image: url(${bgShortenDesktop});
  background-color: ${COLORS.veryDarkViolet};
  padding: 52px 64px;
  border-radius: 10px;
  margin-top: -84px;
`;

const Form = styled.form`
  display: flex;
`;

const TextInput = styled.input`
  flex: 0 1 769px;
  border-radius: 10px;
  padding: ${14 / 16}rem ${32 / 16}rem;
  font-size: ${20 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.secondaryLightGray};
`;

const FormButton = styled.button`
  flex: 1;
  background: ${COLORS.cyan};
  color: ${COLORS.white};
  font-size: ${20 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  /* padding: ${14 / 16}rem ${40 / 16}rem; */
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-left: 24px;
  min-height: 64px;
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ResultItem = styled.li`
  background: ${COLORS.white};
  border-radius: 5px;
  padding: ${18 / 16}rem ${32 / 16}rem;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const UserUrl = styled.a`
  font-size: ${20 / 16}rem;
  line-height: ${36 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  letter-spacing: 0.15px;
  color: ${COLORS.veryDarkBlue};
  margin-right: auto;
`;

const ResultUrl = styled.a`
  font-size: ${20 / 16}rem;
  line-height: ${36 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  letter-spacing: 0.15px;
  color: ${COLORS.cyan};
`;

const ButtonResult = styled.button`
  background: ${COLORS.cyan};
  color: ${COLORS.white};
  font-size: ${15 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  min-height: 40px;
  padding: 0 ${31 / 16}rem;
`;

export default ShortenBar;
