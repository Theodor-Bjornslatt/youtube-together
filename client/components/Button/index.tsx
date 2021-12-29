import { ButtonStyled } from './Button.styled'

type ButtonProps = {
  text?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onSubmit?: React.FormEventHandler
}

function Button({ text = 'Click me', onClick, onSubmit }: ButtonProps) {
  return (
    <ButtonStyled onClick={onClick} onSubmit={onSubmit}>
      {text}
    </ButtonStyled>
  )
}

export default Button
