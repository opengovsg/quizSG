import { Container } from '@chakra-ui/react'

import {
  QuestionInGetQuizDto,
  SubmitQuizAnswerResponseDto,
  SubmitQuizResultResponseDto,
} from '~services/QuizApi/taker'

import FinalScore from './FinalScore'
import MarkedQuestion from './MarkedQuestion'

type Props = {
  submissionResult: SubmitQuizResultResponseDto
  submissionAnswers: SubmitQuizAnswerResponseDto[]
  questions: QuestionInGetQuizDto[]
}

const ResultsPage = ({
  submissionResult,
  submissionAnswers,
  questions,
}: Props): JSX.Element => {
  return (
    <Container maxW="container.xl" py={20}>
      <FinalScore
        finalPercent={Math.ceil(
          (submissionResult.score / submissionResult.total) * 100,
        )}
        passingPercent={submissionResult.passingPercent * 100}
        pass={submissionResult.pass}
      />
      {submissionAnswers.map((answer, index) => {
        const question = questions[index]
        return (
          question.type !== 'MCQ-M' && (
            <MarkedQuestion
              key={index}
              index={index}
              answer={answer}
              question={question}
            />
          )
        )
      })}
    </Container>
  )
}

export default ResultsPage
