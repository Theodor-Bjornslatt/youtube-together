import { HeaderContainer } from './Header.styled'

type HeaderProps = {
  title: string
  children?: JSX.Element | JSX.Element[]
}

export default function Header({ children, title }: HeaderProps) {
  return (
    <HeaderContainer>
      <h5>{title}</h5>
      {children}
    </HeaderContainer>
  )
}
