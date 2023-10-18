import Footer1 from '@/components/home/footer1'
import Header from '@/components/home/header'
import RegisterForm from '@/components/home/registerform'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSidePropsContext } from 'next'
import React from 'react'

type Props = {}

function Register({}: Props) {
  return (
    <div className='reg'>
        <Header/>
        <RegisterForm/>
        <Footer1/>
    </div>
  )
}

export default Register

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    // Create authenticated Supabase Client
    const supabase = createServerSupabaseClient(ctx);
    // Check if we have a session
    const {
      data: { session },
    } = await supabase.auth.getSession();
  
    if (session)
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    return {
      props: {
        initialSession: session,
      },
    };
  };