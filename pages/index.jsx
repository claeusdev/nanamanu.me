import Head from "next/head";
import Footer from "../components/Footer";
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
        <h1 className="font-size-2xl" style={{backgroundImage: "linearGradient(to right, #ee0979, #ff6a00)"}}>Nana Adjei Manu</h1>
        <p className="font-size-lg">
          I'm a Software Engineer from Accra, Ghana. I build web applications mainly with Ruby, JavaScript and TypeScript.
        </p>

        <p className="font-size-lg">
          I’m currently interested in Front-end engineering, CSS architecture,
          React, Ember.js, TypeScript, design systems and Ruby on Rails.
        </p>

        <p className="font-size-lg">
          I'm currently building web applications at <a
            className="link b"
            href="https://urbanbound.com"
            rel="noopener"
            target="_blank"
          >
            Urbanbound
          </a> as a Full-Stack Engineer
          {" "}. Before Urbanbound, 
          I worked at{" "}
          <a
            className="link b"
            href="https://expresspaygh.com"
            rel="noopener"
            target="_blank"
          >
            Expresspay
          </a>, {" "} 
          <a
            className="link b"
            href="https://petratrust.com"
            rel="noopener"
            target="_blank"
          >
            Petra Trust
          </a>{" "}
          as a software developer. Before Petra i worked at{" "}
          <a
            className="link b"
            href="https://qoncept.at"
            rel="noopener"
            target="_blank"
          >
            Qoncept
          </a>{" "}
          in Austria and{" "}
          <a
            className="link b"
            href="https://afradio.co"
            rel="noopener"
            target="_blank"
          >
            Afradio/VendyAds
          </a>{" "}
          in Accra.
        </p>
      </main>

      <Footer />
    </div>
  );
}
