import Script from 'next/script';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MainContainer = dynamic(() => import('../container/main'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Odyssey&apos;22 | The Annual Cultural Fest of IIITD </title>
        <meta name="description" content="The Annual Cultural Fest of IIITD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/main.js" />

      <MainContainer />
    </div>
  );
}
