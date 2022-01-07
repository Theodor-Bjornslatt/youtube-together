import Link from 'next/link'

import RegisterForm from '../components/RegisterForm'
import Header from '../components/Header'

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
