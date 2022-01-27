import { Container, Flex, Spacer } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

import { Option, QuestionType } from '~services/QuizApi/taker'

import MCQAnswerGroup from './MCQAnswerGroup'
import QuestionInfo from './QuestionInfo'
import SelectAnswerGroup from './SelectAnswerGroup'

type Props = {
  index: number
  title: string
  pointValue: number
  description: string
  type: QuestionType
  isLastQuestion: boolean
  options: Option[]
  optionSelected: string[]
  onOptionSelected: (optionId: string | string[]) => void
  onPreviousButtonClick: () => void
  onNextButtonClick: () => void
  onQuizSubmit: () => void
}

const QuestionPage = ({
  index,
  title,
  pointValue,
  description,
  type,
  isLastQuestion,
  options,
  optionSelected,
  onOptionSelected,
  onPreviousButtonClick,
  onNextButtonClick,
  onQuizSubmit,
}: Props): JSX.Element => {
  return (
    <Container maxW="container.xl" py={20}>
      <QuestionInfo
        index={index + 1}
        title={title}
        pointValue={pointValue}
        description={description}
      />
      {type === 'MCQ-M' ? (
        <SelectAnswerGroup
          options={options}
          optionSelected={optionSelected}
          onOptionSelected={onOptionSelected}
        />
      ) : (
        <MCQAnswerGroup
          options={options}
          optionSelected={optionSelected}
          onOptionSelected={onOptionSelected}
        />
      )}
      <Flex mt={8}>
        <Button
          variant="outline"
          onClick={onPreviousButtonClick}
          disabled={index === 0}
        >
          Previous Question
        </Button>
        <Spacer />
        {isLastQuestion ? (
          <Button
            variant="solid"
            onClick={onQuizSubmit}
            disabled={optionSelected.length === 0}
          >
            Submit Quiz
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={onNextButtonClick}
            disabled={optionSelected.length === 0}
          >
            Next Question
          </Button>
        )}
      </Flex>
    </Container>
  )
}

export default QuestionPage
