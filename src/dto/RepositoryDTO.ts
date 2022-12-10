export type Repository = {
  id: number;
  html_url?: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  name: string;
  stargazers_count: number;
};
