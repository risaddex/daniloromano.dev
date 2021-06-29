import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { socialLinks } from '../../constants/constants';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from './HeaderStyles';


const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}
          href=""
        >
          <DiCssdeck size="3rem" /> <Span>DCR</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href={socialLinks.github}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={socialLinks.linkedIn}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href={socialLinks.twitter}>
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
