import type { AppProps } from "next/app";
import "../styles/css/style.css";
import "../styles/css/bootstrap.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { MyUserContextProvider } from "@/utils/useUser";
export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <>
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
