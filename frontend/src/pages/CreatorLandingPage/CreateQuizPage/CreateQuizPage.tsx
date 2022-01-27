/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Box, Container, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'

import Header from '~components/Header'

import QuizConfigurationForm from './QuizConfigurationForm'

const DEFAULT_QUIZ_CONFIG = {
  quizName: '',
  organisationName: '',
  passingScore: '',
  quizDescription: '',
}

const CreateQuizPage = (): JSX.Element => {
  const [quizConfig, setQuizConfig] = useState(DEFAULT_QUIZ_CONFIG)
  const [questions, setQuestions] = useState([])
  return (
    <Box bg="primary.100" alignItems="stretch" minH="100vh">
      <Header>New Quiz</Header>
      <Container maxW="container.xl">
        <SimpleGrid columns={12} spacing={5} style={{ padding: 10 }}>
          <GridItem bg="lightblue" colSpan={8}>
            New question
          </GridItem>
          <GridItem bg="aliceblue" colSpan={4}>
            <Box bg="white" style={{ borderRadius: 20, padding: 20 }}>
              <QuizConfigurationForm quizConfig={quizConfig} />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default CreateQuizPage
