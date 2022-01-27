import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Icon,
  RadioGroup,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { Radio } from '@opengovsg/design-system-react'

import { Option } from '~services/QuizApi/taker'

type Props = {
  options: Option[]
  submittedAnswer: number
  correctAnswer: number
}

const MarkedMCQAnswerGroup = ({
  options,
  submittedAnswer,
  correctAnswer,
}: Props): JSX.Element => {
  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p="6" my={4}>
      {console.log('options', options)}
      {console.log('submittedAnswer', submittedAnswer)}
      {console.log('correctAnswer', correctAnswer)}
      <Text
        color={submittedAnswer === correctAnswer ? 'success.600' : 'danger.600'}
      >
        Your Answer
      </Text>
      <RadioGroup value={submittedAnswer.toString()} mt={4}>
        {options.map((qn: any, index: number) => (
          <Flex alignItems="center" py={1}>
            {submittedAnswer === correctAnswer ? (
              <CheckIcon
                mr={4}
                color={index === correctAnswer ? 'success.500' : 'white'}
              />
            ) : (
              <CloseIcon
                mr={4}
                color={index !== correctAnswer ? 'danger.500' : 'white'}
              />
            )}
            <Radio
              value={qn.id.toString()}
              colorScheme={
                submittedAnswer === correctAnswer ? 'success' : 'danger'
              }
            >
              {qn.text} (Your )
            </Radio>
          </Flex>
        ))}
      </RadioGroup>
    </Box>
  )
}

export default MarkedMCQAnswerGroup
