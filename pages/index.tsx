import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/components/home'
import Hero from '@/components/home/hero'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
    <HomePage session={isUserLoggedIn}/>
    </>
  )
}



