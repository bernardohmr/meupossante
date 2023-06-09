// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import * as repository from '@/../prisma/repository'
import { pickObjectKeys } from '@/utils/pickObjectKeys';
import { hashPassword } from '@/utils/hashPassword';
import { generateToken } from '@/utils/generateToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await repository.listUsers();

    return res.status(200).json(users)
  } else if (req.method === "POST") {
    console.log("*** RECEIVED API POST *** \n" + req.body);

    const requiredKeys = [
      "name",
      "cpf",
      "email",
      "phone",
      "password",
    ];

    const data = pickObjectKeys(JSON.parse(req.body), requiredKeys);

    let missingKey = "";
    requiredKeys.forEach(key => {
      if (data[key] === "" || data[key] === undefined) missingKey = key;
    });

    if (missingKey) return res.status(400).json({ error: `Missing required param: ${missingKey}` });

    data.hashedPassword = await hashPassword(data.password);
    data.currentToken = await generateToken(String(Math.random() * 1000));
    delete data.password;

    try {
      const user = await repository.insertUser(data);
      return res.status(202).json(user)
    } catch (err) {
      throw err
    }
  }
  else {
    return res.status(400).json({ error: "Not implemented" });
  }
}
