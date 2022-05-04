import { Item } from '../../item';
import type { Props } from '../types';
import styles from './styles.module.scss';

const ItemsListPresentation = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <ol className={styles.list}>
        {data.results.map((item: any) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ItemsListPresentation;
