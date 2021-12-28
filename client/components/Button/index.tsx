import { ButtonStyled } from './Button.styled'

type ButtonProps = {
  text?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ text = 'Click me', onClick }: ButtonProps) {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
}

export default Button
