import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Hero />
        <SearchBar />
        <Features />
        <CallToAction />
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: ${1440 / 16}rem;
  margin: 0 auto;
`;

function NavBar() {
  return (
    <Header>
      <Image src={logo} alt="" />
      <Nav>
        <List>
          <ListItem>
            <NavLink>Features</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Pricing</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Resources</NavLink>
          </ListItem>
        </List>
      </Nav>
      <NavLink>Login</NavLink>
      <NavButton>Sign Up</NavButton>
    </Header>
  );
}

const Header = styled.header`
  margin: 48px auto 0;
  width: 90%;
  max-width: ${1108 / 16}rem;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  margin-right: 45px;
`;

const Nav = styled.nav`
  margin-right: auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 29px;
`;

const ListItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  color: hsl(257, 7%, 63%);
  font-weight: 700;
  font-size: ${15 / 16}rem;
`;

const NavButton = styled.a`
  display: block;
  background: hsl(180, 66%, 49%);
  color: hsl(0, 100%, 100%);
  font-size: ${15 / 16}rem;
  font-weight: 700;
  padding: ${9 / 16}em ${24 / 16}em;
  border-radius: 28px;
  margin-left: 37px;
`;

function Hero() {
  return (
    <p>
      More than just shorter links
      <br />
      <br />
      Build your brand’s recognition and get detailed insights <br />
      on how your links are performing.
      <br />
      <br />
      Get Started
    </p>
  );
}

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
