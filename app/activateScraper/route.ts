export async function POST(req: Request) {
  const search = req.body?.search;
}

export async function GET(req: Request) {



  return new Response('Hello Rokas', {
    status: 200,
  });
}
