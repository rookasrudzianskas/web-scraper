// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  collection_id: string
  start_eta: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {

  const {search} = req.body;

  console.log("SEARCH", search);

  res.status(200).json({
    collection_id: '123',
    start_eta: 123,
  })
}
