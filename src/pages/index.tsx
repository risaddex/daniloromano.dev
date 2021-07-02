import { NextSeo } from 'next-seo';
import Accomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { fetchGitHubRepos, TGitHubRepo } from '../utils/fetchProjects';

interface IHomeProps {
  repos:TGitHubRepo[]
}
const Home = ({repos}:IHomeProps) => {
  return (
    <Layout>
      <NextSeo
        title="Home"
       />
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects repos={repos} />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
};

export default Home;

export const getStaticProps =  async () => {
  const repos = await fetchGitHubRepos();

  return {
    props: {
      repos,
    }
  }
}
