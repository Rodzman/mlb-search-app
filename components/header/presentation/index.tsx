import Link from 'next/link';
import { Content } from '../../content';
import { Main } from '../../main';
import { SearchBar } from '../../search-bar';
import type { Props } from '../types';
import styles from './styles.module.scss';

const HeaderPresentation = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Content>
        <Link href="/">
          <a className={styles.logo} />
        </Link>
        <SearchBar />
      </Content>
    </div>
  );
};

export default HeaderPresentation;
