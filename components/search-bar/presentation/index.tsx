import type { Props } from '../types';
import styles from './styles.module.scss';

const SearchBarPresentation = ({ handleSubmit }: Props) => {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button
          type="submit"
          className={styles.searchButton}
          data-testid={'search-bar-button'}
        >
          <div className={styles.buttonContent} />
        </button>
      </form>
    </div>
  );
};

export default SearchBarPresentation;
