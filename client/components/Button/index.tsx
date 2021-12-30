import { ButtonStyled } from './Button.styled'

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onSubmit?: React.FormEventHandler
  children: JSX.Element
}

function Button({ children, onClick, onSubmit }: ButtonProps) {
  return (
    <ButtonStyled onSubmit={onSubmit} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button
