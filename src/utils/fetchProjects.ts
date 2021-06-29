// https://api.github.com/users/risaddex/repos?sort=indexed
// license SHAPE
/* {
  "key": "mit",
  "name": "MIT License",
  "spdx_id": "MIT",
  "url": "https://api.github.com/licenses/mit",
  "node_id": "MDc6TGljZW5zZTEz"
}, */
export type TGitHubRepo = {
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  clone_url: string;
  tags_url:string;
  created_at: string;
  updated_at: string;
  homepage: string;
  language: string;
  private: boolean;
  archived: boolean;
  disabled: boolean;
  fork: boolean;
  stargazers_count: number;
  license: Object;
};

const GITHUB_USERNAME = 'risaddex';

let sortMode = 'indexed';
let page = 1;

export async function fetchGitHubRepos():Promise<TGitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=${sortMode}&page=${page}`
  );
  const data = await res.json() as TGitHubRepo[];
  return data;
}
