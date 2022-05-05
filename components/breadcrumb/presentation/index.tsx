import Link from 'next/link';
import { ShowComponent } from '../../show-component';
import type { Props } from '../types';
import styles from './styles.module.scss';

const BreadcrumbPresentation = ({ categories }: Props) => {
  return (
    <div className={styles.breadcrumb}>
      {categories.path_from_root.map((category, index) => (
        <div key={index + category.id}>
          <Link href={`#`} passHref>
            {category.name}
          </Link>
          <ShowComponent rule={index !== categories.path_from_root.length - 1}>
            <span>{`>`}</span>
          </ShowComponent>
        </div>
      ))}
    </div>
  );
};

export default BreadcrumbPresentation;
