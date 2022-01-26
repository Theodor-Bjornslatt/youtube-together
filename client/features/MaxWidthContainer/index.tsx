import {
  MaxWidthContainerStyled,
  StyledMaxWidthProps
} from './MaxWidthContainer.styled'

type MaxWidthContainerProps = {
  children: JSX.Element | JSX.Element[]
} & StyledMaxWidthProps

export default function MaxWidthContainer({
  children,
  size
}: MaxWidthContainerProps) {
  return (
    <MaxWidthContainerStyled size={size}>{children}</MaxWidthContainerStyled>
  )
}
