import Link from 'next/link'

import RegisterForm from '../features/RegisterForm'
import Header from '../features/Header'

export default function Register() {
  return (
    <>
      <Header title="register">
        <Link href={'/login'}>Login</Link>
      </Header>
      <RegisterForm />
    </>
  )
}
