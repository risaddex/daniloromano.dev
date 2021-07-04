import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import {FaDiscord, FaTelegramPlane, FaTwitter} from 'react-icons/fa'
import { socialLinks } from '../../constants/constants';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telegram</LinkTitle>
          <LinkItem target="_blank" rel="noopener noreferrer" href="https://t.me/risaddex">
          <SocialIcons>
              <FaTelegramPlane size="2rem" />
            </SocialIcons>
            @risaddex
            </LinkItem>
        </LinkColumn>
        <LinkColumn>
          
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:risaddex@gmail.com" target="_blank" rel="noopener noreferrer">
            <SocialIcons>
              <AiFillMail aria-hidden size="2rem" />
            </SocialIcons>
            risaddex@gmail.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="https://discord.com/users/175278447378038785" target="_blank" rel="noopener noreferrer">
            <SocialIcons>
              <FaDiscord aria-hidden size="2rem" />
            </SocialIcons>
            risaddex#5566
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Feito com <span>❤️</span> por <a href="https://github.com/risaddex/daniloromano.dev" target="_blank" rel="noopener noreferrer">@risaddex</a></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={socialLinks.github}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={socialLinks.linkedIn}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={socialLinks.twitter}>
            <FaTwitter size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
