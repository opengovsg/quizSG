import { Button, Container, Flex } from '@chakra-ui/react'

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
  onViewCertificateButtonClick: () => void
}

const ResultsPage = ({
  submissionResult,
  submissionAnswers,
  questions,
  onViewCertificateButtonClick,
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
          <MarkedQuestion
            key={index}
            index={index}
            answer={answer}
            question={question}
          />
        )
      })}
      {submissionResult.pass && (
        <Flex justifyContent="center">
          <Button
            textStyle="h1"
            px={20}
            my={20}
            onClick={onViewCertificateButtonClick}
          >
            Go to Quiz Certificate →
          </Button>
        </Flex>
      )}
    </Container>
  )
}

export default ResultsPage
