import React, { useState } from 'react'
import { Box, CheckboxGroup, Text } from '@chakra-ui/react'
import { Checkbox } from '@opengovsg/design-system-react'

const MarkedSelectAnswerGroup = (props: any): JSX.Element => {
  const [submittedAnswer, setSubmittedAnswer] = useState(
    props.answer.submittedAnswer.toString(),
  )
  const [correctAnswer, setCorrectAnswer] = useState(
    props.answer.correctAnswer.toString(),
  )

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
        <CheckboxGroup value={submittedAnswer}>
          {props.question.options.map((qn: any, index: number) => (
            <Checkbox
              value={index.toString()}
              colorScheme={
                submittedAnswer === correctAnswer ? 'success' : 'danger'
              }
            >
              {qn.text}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Box>

      <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
        <Text color="success.600">Correct Answer</Text>
        <CheckboxGroup value={correctAnswer}>
          {props.question.options.map((qn: any, index: number) => (
            <Checkbox value={index.toString()} colorScheme="success">
              {qn.text}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Box>
    </>
  )
}

export default MarkedSelectAnswerGroup
