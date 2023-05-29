// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import * as repository from '@/../prisma/repository'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const announcements = await repository.listAnnouncements();

  res.status(200).json(announcements)
}
