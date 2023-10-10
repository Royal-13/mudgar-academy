import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e3a54a" />
        <title>Movement With Mudgar</title>
        <meta name="description" content="Learn 7 life transforming habits in 21 days" />
        <meta name="robots" content="noindex,follow" />
        <link href="assets/img/meta_icon/favicon.webp" rel="icon" />
        <link href="assets/img/meta_icon/favicon.webp" rel="apple-touch-icon" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap" as="style"/>
        {/* <noscript>
          &lt;link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&amp;amp;display=swap" /&gt;
        </noscript>
        <link rel="preload" href="assets/css/style.css" as="style" />
        <noscript>
          &lt;link href="assets/css/style.css" rel="stylesheet" /&gt;
        </noscript>
        <link rel="preload" href="/css/bootstrap.css" as="style" />
        <noscript>
          &lt;link href="assets/css/main.css" rel="stylesheet" /&gt;
        </noscript> */}
        </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}
