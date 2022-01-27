import React from 'react'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

import FinalScore from './FinalScore'
import MarkedQuestion from './MarkedQuestion'

const ResultsPage = (): JSX.Element => {
  const answers = [
    {
      id: 1234,
      submittedAnswer: [1],
      correctAnswer: [1],
      isCorrect: true,
      explanation: 'Extra explanation to justify the answer',
    },
    {
      id: 1234,
      submittedAnswer: [2],
      correctAnswer: [1],
      isCorrect: false,
      explanation: 'Extra explanation to justify the answer',
    },
    {
      id: 1234,
      submittedAnswer: [3],
      correctAnswer: [2],
      isCorrect: true,
      explanation: 'Extra explanation to justify the answer',
    },
  ]

  const questions = [
    {
      id: 12345,
      text: 'Bla bla bla question 1?',
      details: 'extra info about the question 1',
      type: 'MCQ-M',
      options: [
        {
          id: 1234,
          text: 'Option 1',
        },
        {
          id: 2345,
          text: 'Option 2',
        },
        {
          id: 3456,
          text: 'Option 2',
        },
      ],
    },
    {
      id: 22345,
      text: 'Bla bla bla question 2?',
      details: 'extra info about the question 2',
      type: 'MCQ-M',
      options: [
        {
          id: 1234,
          text: 'Option 1',
        },
        {
          id: 2345,
          text: 'Option 2',
        },
        {
          id: 3456,
          text: 'Option 2',
        },
      ],
    },
    {
      id: 32345,
      text: 'Bla bla bla question 3?',
      details: 'extra info about the question 3',
      type: 'MCQ-M',
      options: [
        {
          id: 1234,
          text: 'Option 1',
        },
        {
          id: 2345,
          text: 'Option 2',
        },
        {
          id: 3456,
          text: 'Option 2',
        },
      ],
    },
  ]

  return (
    <Container maxW="container.xl" py={20}>
      <FinalScore />
      {answers.map((answer, index) => {
        return (
          <MarkedQuestion
            key={index}
            answer={answer}
            index={index}
            question={questions[index]}
          />
        )
      })}
    </Container>
  )
}

export default ResultsPage
