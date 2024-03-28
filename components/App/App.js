import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import Hero from "../Hero";
import ShortenBar from "../ShortenBar";
import Footer from "../Footer";
import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../ShortlyLogo";

function App() {
  return (
    <Container>
      <NavBar />
      <Main>
        <HeroWrapper>
          <Hero />
        </HeroWrapper>
        <ShortenBar />
        <Features />
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

function Features() {
  return (
    <p>
      Advanced Statistics
      <br />
      <br />
      Track how your links are performing across the web with our
      <br />
      advanced statistics dashboard.
      <br />
      <br />
      Brand Recognition
      <br />
      <br />
      Boost your brand recognition with each click. Generic links don’t
      <br />
      mean a thing. Branded links help instil confidence in your content.
      <br />
      <br />
      Detailed Records
      <br />
      <br />
      Gain insights into who is clicking your links. Knowing when and where
      <br />
      people engage with your content helps inform better decisions.
      <br />
      <br />
      Fully Customizable
      <br />
      <br />
      Improve brand awareness and content discoverability through customizable
      <br />
      links, supercharging audience engagement.
    </p>
  );
}

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
