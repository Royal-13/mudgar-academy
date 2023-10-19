import Footer1 from "@/components/home/footer1";
import Header from "@/components/home/header";
import { useUser } from "@/utils/useUser";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSidePropsContext } from "next";
 

import React, { useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("");

  const {userDetails} = useUser();
  const [link, setLink] = useState("");
  const [course, setCourse] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
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
      console.log('err=', err);
    });


  return (
    <>
      <Header session={isUserLoggedIn}/>
      <main id="main">
        <section id="included" className="Included">
          <div className="container">
            <div className="row" id="row-center">
              <div className="col-lg-9">
                <div id="who" className="white_block who ">
                  <h3 className="brown_heading py-3">Hello {userDetails?.full_name}</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="heading_who px-md-3">Class Link:</h3>
                      <div className="text_who px-2 px-md-3">{link}</div>
                      <h3 className="heading_who px-md-3">
                        Last course bought at:
                      </h3>
                      <div className="text_who px-2 px-md-3">{course}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer1 />
      </main>
    </>
  );
};

export default Dashboard;


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  return {
    props: {
      initialSession: session,
    },
  };
};
