import { Box } from '@chakra-ui/react'

import { GetQuizDto, SubmitQuizResponseDto } from '~services/QuizApi/taker'

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import QuestionPage from './components/QuestionPage'
import ResultsPage from './components/ResultsPage'
import { Phases } from './TakeQuizPageContainer'

type Props = {
  takerName: string
  setTakerName: (name: string) => void
  quiz: GetQuizDto
  phase: Phases
  onTakeQuizSubmit: () => void
  questionIdx: number
  isLastQuestion: boolean
  optionSelected: string[]
  onOptionSelected: (optionId: string | string[]) => void
  onPreviousButtonClick: () => void
  onNextButtonClick: () => void
  onQuizSubmit: () => void
  submission: SubmitQuizResponseDto | null
}

const TakeQuizPage = ({
  takerName,
  setTakerName,
  quiz,
  phase,
  onTakeQuizSubmit,
  questionIdx,
  isLastQuestion,
  optionSelected,
  onOptionSelected,
  onPreviousButtonClick,
  onNextButtonClick,
  onQuizSubmit,
  submission,
}: Props): JSX.Element => {
  return (
    <Box bg="primary.100">
      <Header
        quizName={quiz.name}
        numQuestions={quiz.questions.length}
        questionIdx={questionIdx}
        phase={phase}
      />
      {phase === Phases.BEFORE_TAKING && (
        <LandingPage
          quizDescription={quiz.description}
          takerName={takerName}
          setTakerName={setTakerName}
          onTakeQuizSubmit={onTakeQuizSubmit}
        />
      )}
      {phase === Phases.TAKING && (
        <QuestionPage
          index={questionIdx}
          title={quiz.questions[questionIdx].text}
          pointValue={quiz.questions[questionIdx].pointValue}
          description={quiz.questions[questionIdx].details}
          type={quiz.questions[questionIdx].type}
          isLastQuestion={isLastQuestion}
          options={quiz.questions[questionIdx].options}
          optionSelected={optionSelected}
          onOptionSelected={onOptionSelected}
          onPreviousButtonClick={onPreviousButtonClick}
          onNextButtonClick={onNextButtonClick}
          onQuizSubmit={onQuizSubmit}
        />
      )}
      {phase === Phases.SUBMITTED && submission && (
        <ResultsPage
          submissionResult={submission.result}
          submissionAnswers={submission.answers}
          questions={quiz.questions}
        />
      )}
    </Box>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default TakeQuizPage
