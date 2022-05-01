import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string | string[];
};

const ItemDescriptionService = async (id: string | string[]) => {
  try {
    const item = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const itemDescription = await item.json();
    return itemDescription;
  } catch (error) {
    console.log(error);
  }
};

const ItemService = async (id: string | string[]) => {
  try {
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const itemData = await item.json();
    return itemData;
  } catch (error) {
    console.log(error);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const itemDetails = await ItemService(id);
  const itemDescription = await ItemDescriptionService(id);
  const item = { ...itemDetails, description: itemDescription };
  res.status(200).json(item);
}
