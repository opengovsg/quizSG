import { Container } from '@chakra-ui/react'

import { SubmitQuizResponseDto } from '~services/QuizApi/taker'

import FinalScore from './FinalScore'
import MarkedQuestion from './MarkedQuestion'

type Props = {
  submission: SubmitQuizResponseDto
}

const ResultsPage = ({ submission }: Props): JSX.Element => {
  return (
    <Container maxW="container.xl" py={20}>
      <FinalScore
        finalPercent={Math.ceil(
          (submission.result.score / submission.result.total) * 100,
        )}
        passingPercent={submission.result.passingPercent * 100}
        pass={submission.result.pass}
      />
      {/* {answers.map((answer, index) => {
        return (
          <MarkedQuestion
            key={index}
            answer={answer}
            index={index}
            question={questions[index]}
          />
        )
      })} */}
    </Container>
  )
}

export default ResultsPage
