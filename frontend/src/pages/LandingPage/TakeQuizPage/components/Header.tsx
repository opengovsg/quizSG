import { Text, VStack } from '@chakra-ui/react'

const Header = ({
  quizName,
  numQuestions,
}: {
  quizName: string
  numQuestions: number
}): JSX.Element => {
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
        {numQuestions} Questions (5 minutes to complete)
      </Text>
    </VStack>
  )
}

export default Header
