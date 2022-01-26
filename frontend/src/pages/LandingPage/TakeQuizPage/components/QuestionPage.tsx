import React from 'react'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

import MCQAnswerGroup from './MCQAnswerGroup'

const QuestionPage = (): JSX.Element => {
  const question = {
    index: 8,
    title: 'What is the square root of 15625 times 32 minus 4',
    pointValue: 3,
    description:
      'The Nationanl heritage of singpaore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lacinia leo, at laoreet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed gravida sem a augue accumsan dictum. Vivamus pellentesque odio eget nibh vehicula consectetur.',
  }

  return (
    <Container maxW="container.xl" py={20}>
      <Box color="primary.900" my={8}>
        <Text textStyle="h2">
          Question {question.index}. {question.title}
        </Text>
        <Text textStyle="subhead-1" mt={4}>
          Points: {question.pointValue}
        </Text>
        <Text textStyle="body" mt={4}>
          {question.description}
        </Text>
      </Box>
      <MCQAnswerGroup />
      <Flex mt={8}>
        <Button variant="outline">Previous Question</Button>
        <Spacer />
        <Button variant="outline">Next Question</Button>
      </Flex>
    </Container>
  )
}

export default QuestionPage
