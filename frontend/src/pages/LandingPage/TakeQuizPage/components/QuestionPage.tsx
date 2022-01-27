import React from 'react'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

import MCQAnswerGroup from './MCQAnswerGroup'
import QuestionInfo from './QuestionInfo'

const QuestionPage = (): JSX.Element => {
  return (
    <Container maxW="container.xl" py={20}>
      <QuestionInfo />
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
