import Link from 'next/link';
import { Main } from '../../main';
import { SearchBar } from '../../search-bar';
import type { Props } from '../types';
import styles from './styles.module.scss';

const HeaderPresentation = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Main>
        <Link href="/">
          <a className={styles.logo} />
        </Link>
        <SearchBar>Search Bar</SearchBar>
      </Main>
    </div>
  );
};

export default HeaderPresentation;
