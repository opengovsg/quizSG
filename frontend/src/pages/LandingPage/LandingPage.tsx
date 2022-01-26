import { useHistory } from 'react-router-dom'
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { ROOT_ROUTE } from '~constants/routes'

const LandingPage = (): JSX.Element => {
  const history = useHistory()

  const handleSubmit = (e: any) => {
    // Prevent default which reloads the page
    // Instead call the primary event
    e.preventDefault()
    const quizId = e.target[0].value
    history.push(`${ROOT_ROUTE}${quizId}`)
  }
  return (
    <Flex flexDir="column" bg="primary.600">
      Default Landing Page
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="quiz-id">Quiz ID</FormLabel>
          <Input id="quiz-id" type="text" />
          <FormHelperText>
            Enter quiz ID of the quiz you want to take
          </FormHelperText>
        </FormControl>
        <Button width="full" mt={4} type="submit">
          Enter Quiz
        </Button>
      </form>
    </Flex>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default LandingPage
