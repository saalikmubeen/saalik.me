import { IRepo } from '@interfaces/github'
import { getGitHubRepos } from '@lib/github'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{
    repos: Array<IRepo>
  }>
) {
  const response = await getGitHubRepos()
  const data = await response.json()

  const repos: Array<IRepo> = data
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks,
      url: repo.html_url,
      homepage: repo.homepage
    }))
    .sort((a: IRepo, b: IRepo) => b.stars - a.stars)
    .slice(0, 8)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ repos })
}
