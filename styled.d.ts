// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary1: string;
      background1: string;
      accent1: string;
      button: string;
      background2: string;
    };
    fonts: Record<string, string>;
    breakpoints: Record<string, string>;
  }
}
