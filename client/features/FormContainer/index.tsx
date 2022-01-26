import MaxWidthContainer from '../MaxWidthContainer'
import { Container, StyledFormContainer } from './FormContainer.styled'

type FormContainerProps = {
  children: JSX.Element | JSX.Element[]
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <Container>
      <MaxWidthContainer size={'extraExtraSmall'}>
        <StyledFormContainer>{children}</StyledFormContainer>
      </MaxWidthContainer>
    </Container>
  )
}
