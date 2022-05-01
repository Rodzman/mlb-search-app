import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  search: string | string[];
};

const ItemsService = async (search: string | string[]) => {
  try {
    const items = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    );
    return items.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { search } = req.query;
  const data = await ItemsService(search);
  res.json(data);
}
