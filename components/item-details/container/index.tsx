import { useCallback, useEffect, useState } from 'react';
import ItemDetailsPresentation from '../presentation';
import type { Props } from '../types';

const ItemDetailsContainer = ({ item }: Props) => {
  return <ItemDetailsPresentation item={item} />;
};

export default ItemDetailsContainer;
