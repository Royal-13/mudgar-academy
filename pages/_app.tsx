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
    <Script src="https://analytics.eu.umami.is/script.js" data-website-id="a8b5e580-fa1b-438f-97ec-f687d2c96ddd" />
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
