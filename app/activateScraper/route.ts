import {NextApiRequest} from "next";

export async function POST(req: NextApiRequest) {
  console.log('SUBMITTING SEARCH');
  const {search} = req.body;

  console.log('SEARCH', search);
}
