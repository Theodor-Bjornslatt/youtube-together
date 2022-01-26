import { useRouter } from 'next/router'

import Header from '../../features/Header'
import {
  CenteringContainer,
  GridContainer,
  Heading,
  Reload,
  Paragraph,
  NothingToSee
} from './InternalError.styled'
import MaxWidthContainer from '../../features/MaxWidthContainer'

export default function InternalError() {
  const router = useRouter()

  return (
    <>
      <Header title={'THE ROOM THAT MUST NOT BE MENTIONED'} />
      <CenteringContainer>
        <MaxWidthContainer size={'large'}>
          <GridContainer>
            <Heading>
              Oh no! You found the place where pages come to die!
            </Heading>
            <Reload onClick={() => router.reload()} />
            <Paragraph>
              ...Have you tried turning it off and on again?
            </Paragraph>
            <NothingToSee>
              <p>Nothing to see here</p>
            </NothingToSee>
          </GridContainer>
        </MaxWidthContainer>
      </CenteringContainer>
    </>
  )
}
