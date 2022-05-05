import { Item } from '../../item';
import { ShowComponent } from '../../show-component';
import type { Props } from '../types';
import styles from './styles.module.scss';

const ItemsListPresentation = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <ShowComponent rule={data.results.length === 0}>
        <div className={styles.empty}>
          <h2>No fueron encontrados resultados para su búsqueda.</h2>
        </div>
      </ShowComponent>
      <ShowComponent rule={data.results.length > 0}>
        <ol className={styles.list}>
          {data.results.map((item: any) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))}
        </ol>
      </ShowComponent>
    </div>
  );
};

export default ItemsListPresentation;
