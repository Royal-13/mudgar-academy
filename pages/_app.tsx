import type { AppProps } from "next/app";
import "../styles/css/style.css";
import "../styles/css/bootstrap.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { MyUserContextProvider } from "@/utils/useUser";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <>
    <Script src="https://analytics.eu.umami.is/script.js" data-website-id="d4065aa7-8796-459d-8ff1-4e0e4334739f" />
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
