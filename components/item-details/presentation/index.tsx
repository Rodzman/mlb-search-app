import Image from 'next/image';
import React from 'react';
import type { Props } from '../types';
import styles from './styles.module.scss';
import parse from 'html-react-parser';

const convertText = (text: string) => {
  return text.replace(/\n/g, '<br />');
};
const ItemDetailsPresentation = ({ item }: Props) => {
  console.log('ItemDetailsPresentation: ', item);
  return (
    <div className={styles.item}>
      <div className={styles.mainArea}>
        <Image
          src={
            item.pictures[0].url ||
            'https://http2.mlstatic.com/D_NQ_NP_848745-MLB47402872421_092021-V.webp'
          }
          alt={item.title}
          height="500"
          width="700"
          className={styles.image}
        />
        <div className={styles.description}>
          <h2>Descripción del producto</h2>
          {parse(convertText(item.description.plain_text))}
        </div>
      </div>
      <div className={styles.info}>
        <div>
          {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity}{' '}
          vendidos
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.value}>
          {item.price.toLocaleString('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
          })}
        </div>
        <div className={styles.freeShipping}>{item.free_shipping}</div>
        <button className={styles.button}>Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetailsPresentation;
