import { useCallback, useEffect, useState } from 'react';
import ItemPresentation from '../presentation';
import type { Props } from '../types';

const ItemContainer = ({ item }: Props) => {
  const [newItem, setNewItem] = useState({
    id: '',
    title: '',
    thumbnail: '',
    price: '',
    free_shipping: '',
  });

  const preparePrice = (price: number) => {
    return price.toLocaleString('es-ar', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    });
  };

  const prepareShipping = (shipping: any) => {
    return shipping.free_shipping ? 'Frete Grátis' : '';
  };

  const prepareItem = useCallback(() => {
    setNewItem({
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      free_shipping: prepareShipping(item.shipping),
      price: preparePrice(item.price)
    });
  }, [item]);

  useEffect(() => {
    prepareItem();
  }, [item, prepareItem]);

  return <ItemPresentation item={newItem} />;
};

export default ItemContainer;
