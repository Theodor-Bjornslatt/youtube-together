import Link from 'next/link'

import Header from '../features/Header'
import LoginForm from '../features/LoginForm'

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
