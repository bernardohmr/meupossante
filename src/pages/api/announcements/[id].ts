// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import * as repository from '@/../prisma/repository'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id = req.query.id;

    if (!id || typeof id !== "string") return res.status(400).json({ error: "Invalid query" })

    const announcements = await repository.getAnnouncement(id);

    return res.status(200).json(announcements)

  } else {
    return res.status(400).json({ error: "Not implemented" });
  }
}
