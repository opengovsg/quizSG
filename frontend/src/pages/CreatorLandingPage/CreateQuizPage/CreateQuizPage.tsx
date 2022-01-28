/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Container, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
import _ from 'lodash'

import { CREATOR_ROUTE } from '~constants/routes'
import { useCreateQuiz } from '~hooks/Creator'
import Header from '~components/Header'
import NewQuestion from '~components/NewQuestion'

// import QuestionField from '~components/QuestionField'
import Question from './Question'
import QuizConfigurationForm from './QuizConfigurationForm'

const COMMON_FIELDS = {
  text: '',
  details: '',
  explanation: '',
  pointValue: '',
}

// Exactly 1 option must be true with minimum 2 options
const DEFAULT_MCQ_1 = {
  ...COMMON_FIELDS,
  type: 'MCQ-1',
  options: [
    {
      text: '',
      isTrue: true,
    },
    {
      text: '',
      isTrue: false,
    },
  ],
}

// Minimum 2 options
const DEFAULT_MCQ_M = {
  ...COMMON_FIELDS,
  type: 'MCQ-M',
  options: [
    {
      text: '',
      isTrue: false,
    },
    {
      text: '',
      isTrue: false,
    },
  ],
}

// ============== SEE THIS!!! ======================
// NOTE: Somehow, deleting questions and options is buggy.
// When deleting the latest to the earliest it seems to work fine, but the reverse
// seems to bug out.
const CreateQuizPage = (): JSX.Element => {
  const history = useHistory()
  const [questions, setQuestions] = useState<any>([])
  const { createQuiz } = useCreateQuiz()

  const onClickNewQuestion = (questionType: string) => {
    if (questionType === DEFAULT_MCQ_M.type) {
      setQuestions((prevQuestions: any) => [
        ...prevQuestions,
        _.cloneDeep(DEFAULT_MCQ_M),
      ])
    }
    if (questionType === DEFAULT_MCQ_1.type) {
      setQuestions((prevQuestions: any) => [
        ...prevQuestions,
        _.cloneDeep(DEFAULT_MCQ_1),
      ])
    }
  }

  const onDeleteQuestion = (index: string) => {
    setQuestions((prevQuestions: any) => {
      console.log('splicing', parseInt(index), 1)
      prevQuestions.splice(parseInt(index), 1)
      return [...prevQuestions]
    })
  }

  const onClickCreate = ({
    quizName,
    organisationName,
    passingScore,
    quizDescription,
    onSuccess,
  }: {
    quizName: string
    organisationName: string
    passingScore: string
    quizDescription: string
    onSuccess: any
  }) => {
    createQuiz(
      {
        name: quizName,
        description: quizDescription,
        passingPercent: parseFloat(passingScore) / 100,
        organisation: organisationName,
        questions,
      },
      {
        onSuccess: () => {
          onSuccess()
          history.push(CREATOR_ROUTE)
        },
      },
    )
  }

  console.log('questions', questions)

  return (
    <Box bg="primary.100" alignItems="stretch" minH="100vh">
      <Header>New Quiz</Header>
      <Container maxW="container.xl" my={12}>
        <SimpleGrid columns={12} spacing={5} style={{ padding: 10 }}>
          <GridItem colSpan={8}>
            {_.isEmpty(questions)
              ? null
              : _.map(questions, (question, index) => (
                  <Question
                    key={index}
                    index={index}
                    question={question}
                    onDelete={onDeleteQuestion}
                    setQuestions={setQuestions}
                  />
                ))}
            <NewQuestion onSubmit={onClickNewQuestion} />
            {/* <QuestionField /> */}
          </GridItem>
          <GridItem colSpan={4}>
            <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
              <QuizConfigurationForm onClickCreate={onClickCreate} />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default CreateQuizPage
