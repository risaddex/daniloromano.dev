import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

//TODO: Update data based on github API
const data = [
  { number: 1800, text: 'Horas de Estudo'},
  { number: 10, text: 'Eventos participados', },
  { number: 5, text: 'Github Followers', },
  { number: 25, text: 'Github Stars', }
];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Meus Feitos</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
