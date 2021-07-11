
export type TGitHubRepo = {
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  clone_url: string;
  tags_url: string;
  created_at: string;
  updated_at: string;
  homepage: string;
  language: string;
  private: boolean;
  archived: boolean;
  disabled: boolean;
  fork: boolean;
  topics: string[];
  stargazers_count: number;
  license: Record<string, unknown>;
};

const GITHUB_USERNAME = 'risaddex';

const SORT_MODE = 'indexed';
const PAGE = 1;
const LIMIT = 10;

export async function fetchGitHubRepos(): Promise<TGitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=${SORT_MODE}&page=${PAGE}&per_page=${LIMIT}`,
    // required in order to get the list of topics
    { headers: { Accept: 'application/vnd.github.mercy-preview+json' } }
  );
  const repositoryData = (await res.json()) as TGitHubRepo[];

  return repositoryData;
}
