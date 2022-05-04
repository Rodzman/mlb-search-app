import Link from 'next/link';
import { SearchBar } from '../../search-bar';
import styles from './styles.module.scss';

const HeaderPresentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logo} />
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderPresentation;
