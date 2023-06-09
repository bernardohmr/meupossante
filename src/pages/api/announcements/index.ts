// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import * as repository from '@/../prisma/repository'
import { pickObjectKeys } from '@/utils/pickObjectKeys';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const announcements = await repository.listAnnouncements();

    return res.status(200).json(announcements)
  } else if (req.method === "POST") {
    console.log("*** RECEIVED API POST *** \n" + req.body);

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
