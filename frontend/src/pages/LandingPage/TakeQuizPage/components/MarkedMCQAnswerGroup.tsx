import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, RadioGroup, Text } from '@chakra-ui/react'
import { Radio } from '@opengovsg/design-system-react'

import { Option } from '~services/QuizApi/taker'

type Props = {
  options: Option[]
  submittedAnswer: number
  correctAnswer: number
  isCorrect: boolean
}

const MarkedMCQAnswerGroup = ({
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
        <RadioGroup value={submittedAnswer.toString()} mt={4}>
          {options.map((option, idx) => (
            <Flex
              alignItems="center"
              py={1}
              key={`marked-mcq-answer-group-${idx}`}
            >
              {isCorrect ? (
                <CheckIcon
                  mr={4}
                  color={option.id === correctAnswer ? 'success.500' : 'white'}
                />
              ) : (
                <CloseIcon
                  mr={4}
                  color={option.id === submittedAnswer ? 'danger.500' : 'white'}
                />
              )}
              <Radio
                value={option.id.toString()}
                colorScheme={
                  submittedAnswer === correctAnswer ? 'success' : 'danger'
                }
              >
                {option.text}
              </Radio>
            </Flex>
          ))}
        </RadioGroup>
      </Box>

      {!isCorrect && (
        <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
          <Text color="success.600">Correct Answer</Text>
          <RadioGroup value={correctAnswer.toString()} mt={4}>
            {options.map((option) => (
              <Flex alignItems="center" py={1}>
                <CheckIcon
                  mr={4}
                  color={option.id === correctAnswer ? 'success.500' : 'white'}
                />

                <Radio value={option.id.toString()} colorScheme="success">
                  {option.text}
                </Radio>
              </Flex>
            ))}
          </RadioGroup>
        </Box>
      )}
    </>
  )
}

export default MarkedMCQAnswerGroup
