import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Evmos Token Creation Tool</title>
        <meta name="description" content="Create and launch your own meme token on Evmos" />
        <meta property="og:title" content="Launch Your Meme Coin on Evmos" />
        <meta property="og:description" content="Build and deploy a meme coin instantly. Fast, secure." />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
