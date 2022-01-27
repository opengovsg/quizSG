import { Flex, Heading, HStack } from '@chakra-ui/react'

const CreateQuizPage = (): JSX.Element => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading as="h1">New Quiz</Heading>
      <HStack>
        <div>New Question</div>
        <div>Create Quiz</div>
      </HStack>
    </Flex>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default CreateQuizPage
