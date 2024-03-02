import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:zaryabaslam553@gmail.com">
            zaryabaslam553@gmail.com
          </LinkItem>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; {year} <Link href="https://zaryabaslam.github.io/">  Zaryab Aslam</Link>. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/zaryabaslam">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/zaryab-aslam/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/zaryabaslam_/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
