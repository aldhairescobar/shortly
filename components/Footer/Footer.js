import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../ShortlyLogo";
import instagramIcon from "../../images/icon-instagram.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import facebookIcon from "../../images/icon-facebook.svg";

function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <div>
          <LinkHome>
            <Logo fill={COLORS.white} />
          </LinkHome>
        </div>
        <LinksContainer>
          <LinkCol>
            <Title>Features</Title>
            <LinksNav>
              <LinksList>
                <LinkItem>
                  <Link>Link Shortening</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Branded Links</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Analytics</Link>
                </LinkItem>
              </LinksList>
            </LinksNav>
          </LinkCol>
          <LinkCol>
            <Title>Resources</Title>
            <LinksNav>
              <LinksList>
                <LinkItem>
                  <Link>Blog</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Developers</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Support</Link>
                </LinkItem>
              </LinksList>
            </LinksNav>
          </LinkCol>
          <LinkCol>
            <Title>Company</Title>
            <LinksNav>
              <LinksList>
                <LinkItem>
                  <Link>About</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Our Team</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Careers</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Contact</Link>
                </LinkItem>
              </LinksList>
            </LinksNav>
          </LinkCol>
          <SocialCol>
            <SocialLink>
              <SocialLogo src={facebookIcon} />
            </SocialLink>
            <SocialLink>
              <SocialLogo src={twitterIcon} />
            </SocialLink>
            <SocialLink>
              <SocialLogo src={pinterestIcon} />
            </SocialLink>
            <SocialLink>
              <SocialLogo src={instagramIcon} />
            </SocialLink>
          </SocialCol>
        </LinksContainer>
      </Wrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: ${COLORS.grayishVioletBackground};
  padding: 72px 0;
  color: ${COLORS.white};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: ${1110 / 16}rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const LinkHome = styled.a`
  display: block;
  width: 120px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis: 730px;
`;

const LinkCol = styled.div``;

const LinksNav = styled.nav``;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkItem = styled.li``;

const Link = styled.a`
  font-size: ${15 / 16}rem;
  line-height: auto;
  letter-spacing: -0.23px;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray};
`;

const Title = styled.h2`
  font-size: 1rem;
  line-height: auto;
  letter-spacing: -0.25px;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  margin-bottom: ${22 / 16}rem;
`;

const SocialCol = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialLink = styled.a``;

const SocialLogo = styled.img``;

export default Footer;
