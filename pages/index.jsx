import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Software Engineer - Nana Adjei Manu</title>
        <link rel="icon" href="/favicon.ico" />
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

      <main className={styles.main}>
        <h1  style={{backgroundImage: "linearGradient(to right, #ee0979, #ff6a00)"}}>Nana Adjei Manu</h1>
        <p className="font-size-lg">
          I'm a Software Engineer from Accra, Ghana. I work at <a
            className="link b"
            href="https://andela.com"
            rel="noopener"
            target="_blank"
          >
            Andela
          </a>
          {" "}.
            I love building software for the web.           My projects live on my <a href="https://github.com/claeusdev"> Github</a>.
        </p>
        <p className="font-size-lg">
          You can reach out to me on {" "} 
            <a href="https://linkedin.com/in/nana-adjei-manu">LinkedIn</a>,{" "}
            <a href="https://twitter.com/claeusdev">@twitter</a> or
            <a href="mailto:claeusdev@outlook.com"> Email</a>
        </p>
      </main>

    </div>
  );
}
