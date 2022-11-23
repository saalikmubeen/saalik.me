const GITHUB_REPOS_ENDPOINT =
  'https://api.github.com/users/saalikmubeen/repos?per_page=50'

export const getGitHubRepos = async () => {
  return fetch(GITHUB_REPOS_ENDPOINT)
}
