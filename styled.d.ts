// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {

    colors: Record<string, string>;
    fonts: Record<string, string>;
    breakpoints: Record<string, string>;
  }
}