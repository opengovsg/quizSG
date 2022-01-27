import { Text, VStack } from '@chakra-ui/react'

import { Phases } from '../TakeQuizPageContainer'

type Props = {
  quizName: string
  numQuestions: number
  questionIdx: number
  phase: Phases
}

const Header = ({
  quizName,
  numQuestions,
  questionIdx,
  phase,
}: Props): JSX.Element => {
  const formHeaderDescriptionText = () => {
    switch (phase) {
      case Phases.BEFORE_TAKING:
        return `${numQuestions} Questions (5 minutes to complete)`
      case Phases.TAKING: {
        const questionsLeft = numQuestions - questionIdx
        return `${questionsLeft} Question${questionsLeft > 1 ? 's' : ''} left`
      }
      case Phases.SUBMITTED:
        return `${numQuestions} Questions`
      default:
        return ''
    }
  }
  return (
    <VStack
      padding="50px"
      background="teal.600"
      borderStyle="solid"
      justify="space-between"
      align="center"
    >
      <Text textStyle="h1" color="white">
        {quizName}
      </Text>
      <Text textStyle="h2" color="white">
        {formHeaderDescriptionText()}
      </Text>
    </VStack>
  )
}

export default Header
