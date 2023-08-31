import { Text } from '@/components/ui/text';

import Hero from './hero';

export default async function IndexPage() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );

  return (
    <section className="container">
      <Hero />
    </section>
  );
}
