import Footer1 from '@/components/home/footer1';
import Header from '@/components/home/header';
import HostDetail from '@/components/home/host-detail';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useState } from 'react';
const  detailshost= () => {
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
        <HostDetail/>
        <Footer1/>
        </>
        );
};

export default detailshost;