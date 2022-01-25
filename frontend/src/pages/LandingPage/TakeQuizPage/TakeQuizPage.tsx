import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

const TakeQuizPage = (): JSX.Element => {
  const { quizId } = useParams<{ quizId: string }>()

  return <Flex flexDir="column">Taking quiz with id: {quizId} </Flex>
}

// Required to be default due to using dynamic import for lazy loading.
export default TakeQuizPage
