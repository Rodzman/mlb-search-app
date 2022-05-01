import { Main } from '../../main';
import type { Props } from '../types';
import styles from './styles.module.scss';

const SearchBarPresentation = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Main>{children}</Main>
    </div>
  );
};

export default SearchBarPresentation;
