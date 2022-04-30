import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  res.status(200).json({ id: id });
}

// TODO: deve consultar dois enpoints
// 1. https://api.mercadolibre.com/items/:id
// 2. https://api.mercadolibre.com/items/:id/description
// Retorno deve ser no seguinte formato:
// {
//     "author":{
//     "name":String
//     “lastname”:String
//     },
//     "item":{
//     "id":String,
//     "title":String,
//     "price":{
//     "currency":String,
//     "amount":Number,
//     "decimals":Number
//     },
//     "picture":String,
//     "condition":String,
//     "free_shipping":Boolean,
//     "sold_quantity":Number,
//     "description":String
//     }
//     }
