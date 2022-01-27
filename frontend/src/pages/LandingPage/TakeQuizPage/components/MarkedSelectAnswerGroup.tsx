import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, CheckboxGroup, Flex, Text } from '@chakra-ui/react'
import { Checkbox } from '@opengovsg/design-system-react'

import { Option } from '~services/QuizApi/taker'

type Props = {
  options: Option[]
  submittedAnswer: string[]
  correctAnswer: string[]
  isCorrect: boolean
}

const MarkedSelectAnswerGroup = ({
  options,
  submittedAnswer,
  correctAnswer,
  isCorrect,
}: Props): JSX.Element => {
  return (
    <>
      <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
        <Text color={isCorrect ? 'success.600' : 'danger.600'}>
          Your Answer
        </Text>
        <CheckboxGroup value={submittedAnswer}>
          {options.map((option) => (
            <Flex alignItems="center" py={1}>
              {correctAnswer.includes(option.id.toString()) &&
              submittedAnswer.includes(option.id.toString()) ? (
                <CheckIcon mr={4} color="success.500" />
              ) : (
                <CloseIcon
                  mr={4}
                  color={
                    correctAnswer.includes(option.id.toString()) ||
                    submittedAnswer.includes(option.id.toString())
                      ? 'danger.500'
                      : 'white'
                  }
                />
              )}
              <Checkbox
                value={option.id.toString()}
                colorScheme={
                  correctAnswer.includes(option.id.toString()) &&
                  submittedAnswer.includes(option.id.toString())
                    ? 'success'
                    : correctAnswer.includes(option.id.toString()) ||
                      submittedAnswer.includes(option.id.toString())
                    ? 'danger'
                    : 'secondary'
                }
              >
                {option.text}
              </Checkbox>
            </Flex>
          ))}
        </CheckboxGroup>
      </Box>

      {!isCorrect && (
        <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
          <Text color="success.600">Correct Answer</Text>
          <CheckboxGroup value={correctAnswer}>
            {options.map((option) => (
              <Flex alignItems="center" py={1}>
                <CheckIcon
                  mr={4}
                  color={
                    correctAnswer.includes(option.id.toString())
                      ? 'success.500'
                      : 'white'
                  }
                />
                <Checkbox
                  value={option.id.toString()}
                  colorScheme={
                    correctAnswer.includes(option.id.toString())
                      ? 'success'
                      : 'secondary'
                  }
                >
                  {option.text}
                </Checkbox>
              </Flex>
            ))}
          </CheckboxGroup>
        </Box>
      )}
    </>
  )
}

export default MarkedSelectAnswerGroup
