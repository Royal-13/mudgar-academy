import Header from '@/components/home/header'
import RegisterForm from '@/components/home/registerform'
import React from 'react'

type Props = {}

function login({ }: Props) {
  return (
    <main id='main'>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 cols-margin-both'>
            <RegisterForm />
          </div>
        </div>
      </div>

    </main>
  )
}

export default login