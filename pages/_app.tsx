import type { AppProps } from "next/app";
import "../styles/css/style.css";
import "../styles/css/bootstrap.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { MyUserContextProvider } from "@/utils/useUser";
import Script from "next/script";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e3a54a" />
        <title>Movement With Mudgar</title>
        <meta
          name="description"
          content="Learn Mudgar Online, Mudgar Classes, Improve your stamina, Build a healthy body"
        ></meta>
        <meta
          name="og:description"
          content="Learn Mudgar Online, Mudgar Classes, Improve your stamina, Build a healthy body"
        ></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Script
        src="https://analytics.eu.umami.is/script.js"
        data-website-id="a8b5e580-fa1b-438f-97ec-f687d2c96ddd"
      />
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <MyUserContextProvider>
          <Component {...pageProps} />
        </MyUserContextProvider>
      </SessionContextProvider>
    </>
  );
}
