// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import * as repository from '@/../prisma/repository'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await repository.listUsers();

    return res.status(200).json(users)
  } else {
    return res.status(400).json({ error: "Not implemented" });
  }
}
