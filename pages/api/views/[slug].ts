import db from '@lib/firebase'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IViewsTotal } from '@interfaces/firebase'

const slugViews = async (
  req: NextApiRequest,
  res: NextApiResponse<IViewsTotal>
) => {
  const ref =
    req.query.slug === 'home'
      ? db.ref('home')
      : db.ref('views').child(req?.query?.slug?.toString() as string)

  if (req.method === 'GET') {
    console.log('GET.......!!!!')
    const snapshot = await ref.once('value')
    const views = snapshot.val()
    console.log('GET.......', views)

    return res.status(200).json({ total: views })
  }

  if (req.method === 'POST') {
    console.log('POST.......!!!!')
    await new Promise((resolve) => setTimeout(resolve, 500))
    const { snapshot } = await ref.transaction((currentViews) => {
      console.log('POST.......', currentViews)
      if (currentViews === null) {
        return 0
      }
      console.log('POST2.......', currentViews)
      return currentViews + 1
    })

    return res.status(200).json({
      total: snapshot.val()
    })
  }
}

export default slugViews
