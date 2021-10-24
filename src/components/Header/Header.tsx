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
  SocialIcon,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="https://daniloromano.dev">
        <a
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}
          href="https://daniloromano.dev"
        >
          <DiCssdeck size="3rem" /> <Span>DCR</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Sobre</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#">
          <NavLink onClick={() => alert('em breve :)')}>Blog</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcon url={socialLinks.github} icon={AiFillGithub} />
      <SocialIcon icon={AiFillLinkedin} url={socialLinks.linkedIn} />
      <SocialIcon icon={AiOutlineTwitter} url={socialLinks.twitter} />
    </Div3>
  </Container>
);

export default Header
