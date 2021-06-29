import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Here you will find the most relevant projects I've been participating,
        technologies I've been working with, and more about me.
      </SectionText>
      <Button onClick={() => (window.location.href = '/#projects')}>
        Get Started
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
