import { useRouter } from 'next/router';
import SearchBarPresentation from '../presentation';
import type { Props } from '../types';

const SearchBarContainer = () => {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`TESTE`, event.currentTarget.as_word?.value);
    //TODO: Change route to items page
    router.push('/api/items?search=' + event.currentTarget.as_word.value);
  };
  return <SearchBarPresentation handleSubmit={handleSubmit} />;
};

export default SearchBarContainer;
