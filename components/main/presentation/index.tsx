import type { Props } from '../types';
import styles from './styles.module.scss';

const MainPresentation = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <section>Breadcrumb</section>
      <section>{children}</section>
    </div>
  );
};

export default MainPresentation;
