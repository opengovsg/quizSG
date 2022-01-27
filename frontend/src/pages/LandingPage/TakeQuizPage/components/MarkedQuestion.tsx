import { Box, Text } from '@chakra-ui/react'

import {
  QuestionInGetQuizDto,
  SubmitQuizAnswerResponseDto,
} from '~services/QuizApi/taker'

import MarkedMCQAnswerGroup from './MarkedMCQAnswerGroup'
import MarkedSelectAnswerGroup from './MarkedSelectAnswerGroup'
import QuestionInfo from './QuestionInfo'

type Props = {
  index: number
  answer: SubmitQuizAnswerResponseDto
  question: QuestionInGetQuizDto
}

const MarkedQuestion = ({ index, answer, question }: Props): JSX.Element => {
  return (
    <Box py={8} color="primary.900">
      <QuestionInfo
        index={index + 1}
        title={question.text}
        pointValue={question.pointValue}
        description={question.details}
      />
      {question.type === 'MCQ-M' ? (
        <MarkedSelectAnswerGroup
          options={question.options}
          submittedAnswer={answer.submittedAnswer.map((a) => a.toString())}
          correctAnswer={answer.correctAnswer.map((a) => a.toString())}
          isCorrect={answer.isCorrect}
        />
      ) : (
        <MarkedMCQAnswerGroup
          options={question.options}
          submittedAnswer={answer.submittedAnswer[0]}
          correctAnswer={answer.correctAnswer[0]}
          isCorrect={answer.isCorrect}
        />
      )}
      <Box bg="white" mt={8} p={10} borderRadius="lg" boxShadow="sm">
        <Text textStyle="body-1">{answer.explanation}</Text>
      </Box>
    </Box>
  )
}

export default MarkedQuestion
