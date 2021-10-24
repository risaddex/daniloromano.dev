import { NextSeo } from 'next-seo';
import Accomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { fetchGitHubRepos, GitHubRepo } from '../utils/fetchProjects';

interface IHomeProps {
  repos: GitHubRepo[];
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
  // fetch last 7 repos, but only render 7 since the bellow filter is applied
  const repos = await fetchGitHubRepos();
  const filteredRepos = repos.filter((rep) => rep.name !== 'daniloromano.dev' && !rep.fork)
  return {
    props: {
      repos:filteredRepos,
    }
  }
}
