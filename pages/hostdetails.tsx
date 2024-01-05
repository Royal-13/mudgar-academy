import Footer1 from "@/components/home/footer1";
import Header from "@/components/home/header";
import HostDetail from "@/components/home/host-detail";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import React, { useState } from "react";
const detailshost = () => {
  const supabaseClient = useSupabaseClient();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const user_session = async () => {
    const { data, error } = await supabaseClient.auth.getSession();
    return data.session;
  };

  const isSession2 = user_session()
    .then((val) => {
      if (val != null) {
        setIsUserLoggedIn(true);
      }
    })
    .catch((err) => {
      console.log("err=", err);
    });
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e3a54a" />
        <title>Hosts</title>
        <meta name="description" content="Hosts for the Mudgar Classes"></meta>
        <meta
          name="og:description"
          content="Hosts for the Mudgar Classes"
        ></meta>
      </Head>
      <Header session={isUserLoggedIn} />
      <HostDetail />
      <Footer1 />
    </>
  );
};

export default detailshost;
