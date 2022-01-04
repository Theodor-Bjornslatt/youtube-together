import { ButtonStyled } from './Button.styled'

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onSubmit?: React.FormEventHandler
  children: React.ReactNode
}

function Button({ children, onClick, onSubmit }: ButtonProps) {
  return (
    <ButtonStyled onSubmit={onSubmit} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button
