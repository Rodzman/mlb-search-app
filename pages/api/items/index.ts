import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  search: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { search } = req.query;
  res.status(200).json({ search });
}

// TODO: deve consultar o seguinte enpoint
// 1. /api/items?q=:query -> https://api.mercadolibre.com/sites/MLA/search?q=:query
// Retorno deve ser no seguinte formato:
// {
// "author":{
//     "name":String
//     “lastname”:String
//     },
//     "categories":[String,String,String,...],
//     "items":[
//     {
//     "id":String,
//     "title":String,
//     "price":{
//     "currency":String,
//     "amount":Number,
//     "decimals":"Number"
//     },
//     "picture":String,
//     "condition":String,
//     "free_shipping":Boolean
//     },
//     {...},
//     {...},
//     {...}
//     ]
//     }
