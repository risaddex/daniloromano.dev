import { AppProps } from 'next/app';
import {DefaultSeo} from 'next-seo'
import Theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <DefaultSeo
          titleTemplate="Danilo Cerqueira Romano | %s"
          openGraph={{
            type:'website',
            locale:'pt_BR',
            url:'http://www.daniloromano.dev/',
            site_name:'Danilo Cerqueira Romano',
            profile: {
              firstName:'Danilo',
              lastName:'Romano',
              gender:'male'
            }
          }}
          twitter={{
            handle:"@risaddex",
            site:'@risaddex',
            cardType:'summary_large_image'
          }}
        />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
