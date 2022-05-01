import { Header } from '../../header';
import { Main } from '../../main';
import type { Props } from '../types';
import styles from './styles.module.scss';

const LayoutPresentation = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default LayoutPresentation;
