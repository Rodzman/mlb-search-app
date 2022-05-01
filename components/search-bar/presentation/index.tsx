import { Main } from '../../main';
import type { Props } from '../types';
import styles from './styles.module.scss';

const SearchBarPresentation = ({ handleSubmit }: Props) => {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Digite o que você quer encontrar"
          name="as_word"
          placeholder="Buscar produtos, marcas e muito mais…"
          maxLength={120}
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          autoComplete="off"
          tabIndex={3}
          defaultValue=""
          aria-activedescendant=""
          aria-controls="cb1-list"
          aria-autocomplete="list"
          id="searchbar-input"
          aria-expanded="false"
          data-testid="search-bar-input"
          role="combobox"
          className={styles.input}
        />
      </form>
    </div>
  );
};

export default SearchBarPresentation;
