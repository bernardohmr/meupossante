// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type IResponse = Array<{
  id: number;
  teste: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  res.status(200).json([
    { id: 1, teste: "testando" },
    { id: 2, teste: "testando" },
    { id: 3, teste: "testando" }
  ])
}
