import React, { useState } from 'react'
import { GridItem, SimpleGrid, VStack } from '@chakra-ui/react'

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
    <VStack bg="primary.100" alignItems="stretch">
      <Header>New Quiz</Header>
      <SimpleGrid columns={12} spacing={10}>
        <GridItem bg="orange" colSpan={8}>
          New question
        </GridItem>
        <GridItem colSpan={4}>
          <QuizConfigurationForm quizConfig={quizConfig} />
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default CreateQuizPage
