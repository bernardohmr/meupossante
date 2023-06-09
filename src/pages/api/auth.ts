// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import * as repository from '@/../prisma/repository'
import { pickObjectKeys } from '@/utils/pickObjectKeys';
import { generateToken } from '@/utils/generateToken';
import { comparePassword } from '@/utils/comparePassword';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("*** RECEIVED API POST *** \n" + req.body);

    const requiredKeys = [
      "email",
      "password",
    ];

    const data = pickObjectKeys(JSON.parse(req.body), requiredKeys);

    let missingKey = "";
    requiredKeys.forEach(key => {
      if (data[key] === "" || data[key] === undefined) missingKey = key;
    });
    console.log(JSON.stringify({ missingKey }))

    if (missingKey) return res.status(400).json({ error: `Missing required param: ${missingKey}` });

    const user = await repository.getUserByEmail(data.email);
    console.log(JSON.stringify({ user }))
    if (!user) return res.status(400).json({ error: "Invalid credentials" });
    const { isValid } = await comparePassword(data.password, user?.hashedPassword);
    console.log(JSON.stringify({ isValid }))
    if (!isValid) return res.status(400).json({ error: "Invalid credentials" });
    const token = await generateToken(user.id);
    console.log(JSON.stringify({ token }))
    return res.status(202).json(token)

  }
  else {
    return res.status(400).json({ error: "Not implemented" });
  }
}
