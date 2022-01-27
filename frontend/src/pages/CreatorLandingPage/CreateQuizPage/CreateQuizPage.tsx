/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Box, Container, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'

import Header from '~components/Header'
import NewQuestion from '~components/NewQuestion'
import QuestionField from '~components/QuestionField'

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
      <Container maxW="container.xl" my={12}>
        <SimpleGrid columns={12} spacing={5} style={{ padding: 10 }}>
          <GridItem colSpan={8}>
            <NewQuestion />
            <QuestionField />
          </GridItem>
          <GridItem bg="aliceblue" colSpan={4}>
            <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
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
