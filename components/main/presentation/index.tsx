import { SearchBar } from '../../search-bar';
import type { Props } from '../types';
import styles from './styles.module.scss';

const MainPresentation = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainPresentation;
