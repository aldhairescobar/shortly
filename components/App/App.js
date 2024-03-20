import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import Hero from "../Hero";
import { COLORS, WEIGHTS } from "../../constants";

function App() {
  return (
    <Container>
      <NavBar />
      <main>
        <Hero />
        <SearchBar />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: ${1440 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
`;

function SearchBar() {
  return (
    <p>
      Shorten a link here...
      <br />
      <br />
      Shorten It!
    </p>
  );
}

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

function Footer() {
  return (
    <p>
      Features
      <br />
      <br />
      Link Shortening
      <br />
      Branded Links
      <br />
      Analytics
      <br />
      <br />
      Resources
      <br />
      <br />
      Blog
      <br />
      Developers
      <br />
      Support
      <br />
      <br />
      Company
      <br />
      <br />
      About
      <br />
      Our Team
      <br />
      Careers
      <br />
      Contact
      <br />
    </p>
  );
}

export default App;
