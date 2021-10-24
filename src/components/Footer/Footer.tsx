import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import {FaDiscord, FaTelegramPlane, FaTwitter} from 'react-icons/fa'
import { socialLinks } from '../../constants/constants';

import { SocialIcon } from '../Header/HeaderStyles';
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
          <LinkItem
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/risaddex"
          >
            <SocialIcon icon={FaTelegramPlane} iconProps={{ size: '2rem' }} />
            @risaddex
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem
            href="mailto:risaddex@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon icon={AiFillMail} iconProps={{ size: '2rem' }} />
            risaddex@gmail.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Discord</LinkTitle>
          <LinkItem
            href="https://discord.com/users/175278447378038785"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              icon={FaDiscord}
              iconProps={{ 'aria-hidden': true, size: '2rem' }}
            />
            risaddex#5566
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Feito com <span>❤️</span> por{' '}
            <a
              href="https://github.com/risaddex/daniloromano.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              @risaddex
            </a>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcon icon={AiFillGithub} url={socialLinks.github} />
          <SocialIcon icon={AiFillLinkedin} url={socialLinks.linkedIn} />
          <SocialIcon icon={FaTwitter} url={socialLinks.twitter} />
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
