import Img from '@/components/ui/img';

import Hero from './hero';

export default async function IndexPage() {
  return (
    <section>
      <div className="-space-y-96">
        <Hero className="container" />
        <Img
          src="/public/assets/images/bg.svg"
          className="mx-auto max-w-[1800px]"
          aspectRatio="1921/4778"
        />
      </div>
    </section>
  );
}
