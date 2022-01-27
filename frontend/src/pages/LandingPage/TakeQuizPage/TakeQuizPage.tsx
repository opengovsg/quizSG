import { Box } from '@chakra-ui/react'

import { GetQuizDto } from '~services/QuizApi/taker'

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import QuestionPage from './components/QuestionPage'
import ResultsPage from './components/ResultsPage'

type Props = {
  takerName: string
  setTakerName: (name: string) => void
  quiz: GetQuizDto
}

const TakeQuizPage = ({
  takerName,
  setTakerName,
  quiz,
}: Props): JSX.Element => {
  return (
    <>
      <Box bg="primary.100">
        <Header quizName={quiz.name} numQuestions={quiz.questions.length} />
        <LandingPage
          quizDescription={quiz.description}
          takerName={takerName}
          setTakerName={setTakerName}
        />
        <QuestionPage />
        <ResultsPage />
      </Box>
    </>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default TakeQuizPage
