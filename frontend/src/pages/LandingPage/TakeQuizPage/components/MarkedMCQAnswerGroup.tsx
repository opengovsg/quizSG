import React, { useState } from 'react'
import { Box, RadioGroup, Text } from '@chakra-ui/react'
import { Radio } from '@opengovsg/design-system-react'

const MarkedMCQAnswerGroup = (props: any): JSX.Element => {
  const [submittedAnswer, setSubmittedAnswer] = useState(
    props.answer.submittedAnswer.toString(),
  )
  const [correctAnswer, setCorrectAnswer] = useState(
    props.answer.correctAnswer.toString(),
  )
  // const qnArr = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']

  return (
    <>
      <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
        <Text
          color={
            submittedAnswer === correctAnswer ? 'success.600' : 'danger.600'
          }
        >
          Your Answer
        </Text>
        <RadioGroup value={submittedAnswer}>
          {props.question.options.map((qn: any, index: number) => (
            <Radio
              value={index.toString()}
              colorScheme={
                submittedAnswer === correctAnswer ? 'success' : 'danger'
              }
            >
              {qn.text}
            </Radio>
          ))}
        </RadioGroup>
      </Box>

      <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
        <Text color="success.600">Correct Answer</Text>
        <RadioGroup value={correctAnswer}>
          {props.question.options.map((qn: any, index: number) => (
            <Radio colorScheme="success" value={index.toString()}>
              {qn.text}
            </Radio>
          ))}
        </RadioGroup>
      </Box>
    </>
  )
}

export default MarkedMCQAnswerGroup
