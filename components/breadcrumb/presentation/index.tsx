import Image from 'next/image';
import Link from 'next/link';
import type { Props } from '../types';
import styles from './styles.module.scss';

const BreadcrumbPresentation = ({ categories }: Props) => {
  return (
    <div className={styles.breadcrumb}>
      {categories.path_from_root.map((category, index) => (
        <>
          <Link key={index + category.id} href={`#`} passHref>
            {category.name}
          </Link>
          {index !== categories.path_from_root.length - 1 && <span>{`>`}</span>}
        </>
      ))}
    </div>
  );
};

export default BreadcrumbPresentation;
