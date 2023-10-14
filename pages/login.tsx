import Header from "@/components/home/header";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		password: '',
	});

	const { name, email, phoneNumber, password } = formData;
	const supabaseClient = useSupabaseClient();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { data, error } = await supabaseClient.auth.signInWithPassword(
			{
				email: formData.email,
				password: formData.password,
			}
		);
		if (!error) {
			
			router.push('/');
		}
		else {
			console.log("some error occured")
		}


	};

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-h2">Login</h2>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <button className="login-button" onClick={}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
    }
  };
}