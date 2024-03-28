import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import Hero from "../Hero";
import ShortenBar from "../ShortenBar";
import Statistics from "../Statistics";
import Footer from "../Footer";
import { COLORS, WEIGHTS } from "../../constants";

function App() {
  return (
    <Container>
      <NavBar />
      <Main>
        <HeroWrapper>
          <Hero />
        </HeroWrapper>
        <ShortenBar />
        <Statistics />
        <CallToAction />
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: ${1440 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
`;

const Main = styled.main`
  background: ${COLORS.lightGray};
`;

const HeroWrapper = styled.div`
  background: ${COLORS.white};
`;

function CallToAction() {
  return (
    <p>
      Boost your links today
      <br />
      <br />
      Get Started
    </p>
  );
}

export default App;
