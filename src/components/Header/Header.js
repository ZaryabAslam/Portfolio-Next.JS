import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white" }}>

        <img src="/ZaryabLogo.jpg" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Zaryab</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/technologies" legacyBehavior>
          <NavLink>Tech Stack</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
      <Link href="/Accomplishments" legacyBehavior>
          <NavLink>Accomplishments</NavLink>
          </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/zaryabaslam">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/zaryab-aslam/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/zaryabaslam_/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
