import { Flex } from '@chakra-ui/react'

import { useFetchAllQuizzes } from '~hooks/Creator'

const CreatorLandingPage = (): JSX.Element => {
  const { allQuizzes } = useFetchAllQuizzes()
  console.log(allQuizzes)
  return <Flex flexDir="column">Creator Landing Page</Flex>
}

// Required to be default due to using dynamic import for lazy loading.
export default CreatorLandingPage
