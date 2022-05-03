import Image from 'next/image';
import Link from 'next/link';
import { Main } from '../../main';
import { SearchBar } from '../../search-bar';
import type { Props } from '../types';
import styles from './styles.module.scss';

const ItemPresentation = ({ item }: any) => {
  return (
    <Link href={`/items/${item.id}`} passHref>
      <div className={styles.item}>
        <Image
          src={
            item.thumbnail ||
            'https://http2.mlstatic.com/D_NQ_NP_848745-MLB47402872421_092021-V.webp'
          }
          alt={item.title}
          height="160"
          width="160"
          className={styles.image}
        />
        <div className={styles.info}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.value}>{item.price}</div>
          <div className={styles.freeShipping}>{item.free_shipping}</div>
        </div>
      </div>
    </Link>
  );
};

export default ItemPresentation;
