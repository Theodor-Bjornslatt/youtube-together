import { HeaderContainer, Title } from './Header.styled'

type HeaderProps = {
  title: string
  children?: JSX.Element | JSX.Element[]
}

export default function Header({ children, title }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {children && children}
    </HeaderContainer>
  )
}
