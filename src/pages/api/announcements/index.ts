// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import * as repository from '@/../prisma/repository'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const announcements = await repository.listAnnouncements();

    return res.status(200).json(announcements)
  } else if (req.method === "POST") {
    console.log("*** RECEIVED API POST *** \n" + req.body);

    // return res.send('ok');

    const requiredKeys = [
      "model",
      "version",
      "value",
      "city",
      "year",
      "kilometers",
      "motorization",
      "color",
      "uniqueOwner",
    ];

    const data = pickObjectKeys(JSON.parse(req.body), requiredKeys);
    data["value"] = parseInt(data["value"]);
    data["kilometers"] = parseInt(data["kilometers"]);
    data["uniqueOwner"] = data["uniqueOwner"] === "true" ? true : false;

    let missingKey = "";
    requiredKeys.forEach(key => {
      if (data[key] === "" || data[key] === undefined) missingKey = key;
    });

    if (missingKey) return res.status(400).json({ error: `Missing required param: ${missingKey}` });

    try {
      const announcement = await repository.insertAnnouncement(data);
      return res.status(202).json(announcement)
    } catch (err) {
      throw err
    }

  } else {
    return res.status(400).json({ error: "Not implemented" });
  }
}

function pickObjectKeys<T extends object>(raw: T, keys: string | string[]): T {
  const keysToFilter = typeof keys === "string"
    ? [keys]
    : keys;

  return Object.keys(raw)
    .filter(key => keysToFilter.includes(key))
    .reduce((obj, key) => {
      obj[key] = (raw as any)[key];
      return obj;
    }, {} as any) as T;
}