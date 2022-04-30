import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Items: NextPage = () => {
  const { search } = useRouter().query;
  return (
    <div>
      Items - {search}
      <br />
      <Link href={'/items/18'}>Item 18</Link>
      <Link href={'/items/1'}>Item 1</Link>
      <Link href={'/items/3'}>Item 3</Link>
    </div>
  );
};

export default Items;
