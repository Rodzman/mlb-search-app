import Image from 'next/image';
import React from 'react';
import type { Props } from '../types';
import * as utils from '../utils';
import styles from './styles.module.scss';

const ItemDetailsPresentation = ({ item }: Props) => (
  <div className={styles.item}>
    <div className={styles.mainArea}>
      <Image
        src={item.pictures[0].url}
        alt={item.title}
        height="500"
        width="700"
        className={styles.image}
      />
      <div className={styles.description}>
        <h2>Descripción del producto</h2>
        {utils.convertText(item.description.plain_text)}
      </div>
    </div>
    <div className={styles.info}>
      <div>
        {utils.getCondition(item.condition)} - {item.sold_quantity} vendidos
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.value}>{utils.getPrice(item.price)}</div>
      <div className={styles.freeShipping}>{item.free_shipping}</div>
      <button className={styles.button}>Comprar</button>
    </div>
  </div>
);

export default ItemDetailsPresentation;
