import React, { useState } from 'react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, CheckboxGroup, Flex, Text } from '@chakra-ui/react'
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
            <Flex>
              {submittedAnswer.some(correctAnswer) ? (
                <CheckIcon
                  mr={4}
                  color={
                    qn.id.toString() === correctAnswer ? 'success.500' : 'white'
                  }
                />
              ) : (
                <CloseIcon
                  mr={4}
                  color={
                    qn.id.toString() !== correctAnswer ? 'danger.500' : 'white'
                  }
                />
              )}
              <Checkbox
                value={index.toString()}
                colorScheme={
                  qn.id.toString() === correctAnswer ? 'success' : 'danger'
                }
              >
                {qn.text}
              </Checkbox>
            </Flex>
          ))}
        </CheckboxGroup>
      </Box>

      <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
        <Text color="success.600">Correct Answer</Text>
        <CheckboxGroup value={correctAnswer}>
          {props.question.options.map((qn: any, index: number) => (
            <Flex>
              <CheckIcon
                mr={4}
                color={
                  qn.id.toString() === correctAnswer ? 'success.500' : 'white'
                }
              />
              <Checkbox value={index.toString()} colorScheme="success">
                {qn.text}
              </Checkbox>
            </Flex>
          ))}
        </CheckboxGroup>
      </Box>
    </>
  )
}

export default MarkedSelectAnswerGroup
