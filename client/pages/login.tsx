import Link from 'next/link'

import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <>
      <Header title={'login'}>
        <Link href={'/register'}>Sign up</Link>
      </Header>
      <LoginForm />
    </>
  )
}
