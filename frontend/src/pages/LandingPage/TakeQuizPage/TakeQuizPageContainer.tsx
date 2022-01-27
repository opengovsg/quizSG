import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import { useFetchQuiz } from '~hooks/Taker'

import TakeQuizPage from './TakeQuizPage'

const TakeQuizPageContainer = (): JSX.Element => {
  const { quizId } = useParams<{ quizId: string }>()
  const { quiz, fetchQuizError } = useFetchQuiz(quizId)
  const [takerName, setTakerName] = useState<string>('')

  // TODO: to render toast on fetchQuizError using useEffect()
  if (
    !quiz ||
    !quiz.questions ||
    quiz.questions.length === 0 ||
    !quiz.questions[0].options
  )
    return <Flex>Cannot fetch quiz</Flex>
  return (
    <TakeQuizPage
      takerName={takerName}
      setTakerName={setTakerName}
      quiz={quiz}
    />
  )
}

export default TakeQuizPageContainer
