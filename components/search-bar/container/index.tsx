import { useRouter } from 'next/router';
import SearchBarPresentation from '../presentation';
import type { Props } from '../types';

const SearchBarContainer = () => {
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push('/items?search=' + event.currentTarget.elements.as_word.value);
  };
  return <SearchBarPresentation handleSubmit={handleSubmit} />;
};

export default SearchBarContainer;
