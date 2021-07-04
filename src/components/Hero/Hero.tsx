import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Olá <br />
        Eu sou o Danilo
      </SectionTitle>
      <SectionText>
        Aqui você encontrará os projetos mais relevantes que tenho participado,
        tecnologias que tenho utilizado, e mais sobre mim.
      </SectionText>
      <Button onClick={() => (window.location.href = '/#projects')}>
        Começar
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
