import type { NextPage } from 'next'
import Link from 'next/link';

const Items: NextPage = () => {
    return (
        <div>
            Items<br />
            <Link href={'/items/18'}>Item 18</Link>
            <Link href={'/items/1'}>Item 1</Link>
            <Link href={'/items/3'}>Item 3</Link>
        </div>
    );
}

export default Items;