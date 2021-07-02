import ProjectComponent from '../../components/Projects/Projects';
import { Layout } from '../../layout/Layout';
import { fetchGitHubRepos, TGitHubRepo } from '../../utils/fetchProjects';

const Projects = ({ repos }: { repos: TGitHubRepo[] }) => {
  return (
    <Layout>
      <ProjectComponent repos={repos} />
    </Layout>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const repos = await fetchGitHubRepos();

  return {
    props: {
      repos,
    },
  };
};
