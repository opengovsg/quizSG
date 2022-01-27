import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button, Flex } from '@chakra-ui/react'

import { useFetchAllQuizzes } from '~hooks/Creator'

const CreatorLandingPage = (): JSX.Element => {
  const { allQuizzes } = useFetchAllQuizzes()
  const history = useHistory()
  const { path } = useRouteMatch()

  console.log(allQuizzes)
  return (
    <Flex flexDir="column">
      Creator Landing Page
      <Button onClick={() => history.push(`${path}/create`)}>
        {' '}
        Create Quiz{' '}
      </Button>
    </Flex>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default CreatorLandingPage
