import Link from 'next/link';
import { Item } from '../../item';
import { Main } from '../../main';
import { SearchBar } from '../../search-bar';
import type { Props } from '../types';
import styles from './styles.module.scss';

const ItemsListPresentation = ({ items }: any) => {
  return (
    <div className={styles.container}>
      <ol className={styles.list}>
        {items.results.map((item: any) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ItemsListPresentation;
