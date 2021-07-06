import { ThemeProvider } from 'styled-components';
import {darkTheme} from "../themes/default";
import GlobalStyles from './globals';

import type {ReactNode} from 'react'

type ThemeProps = {
  children: ReactNode
}

const Theme = ({ children }:ThemeProps) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;