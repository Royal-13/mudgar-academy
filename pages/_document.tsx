import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link href="/img/meta_icon/favicon.ico" rel="apple-touch-icon" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap"
          />
        </noscript>
        <link rel="preload" href="/css/style.css" as="style" />
        <noscript>
          <link href="/css/style.css" rel="stylesheet" />
        </noscript>
        <link rel="preload" href="/css/bootstrap.css" as="style" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="/js/bootstrap.js" async></script>
        <script src="/js/mixpanel.min.js" async></script>
        <script src="/js/main.js" async></script>
      </body>
    </Html>
  );
}
