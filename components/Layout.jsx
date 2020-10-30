import Head from "next/head";

const withLayout = (Page) => {
  return () => (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nana Adjei Manu - Software Engineer</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Software Engineer based in Accra, Ghana"
        />
        <meta property="og:title" content="Nana Adjei Manu" />
        <meta
          property="og:description"
          content="Software Engineer based in Accra, Ghana"
        />
        <meta property="og:url" content="https://nanamanu.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nanamanu.xyz/me.jpeg" />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="620" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@claeusdev" />
      </Head>
      <main className="main">
        <Nav />
        <Page />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default withLayout;
