import { Box, RadioGroup, Text } from '@chakra-ui/react'
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
      <RadioGroup value={submittedAnswer}>
        {options.map((option, index) => (
          <Radio
            value={index.toString()}
            colorScheme={
              submittedAnswer === correctAnswer ? 'success' : 'danger'
            }
          >
            {option.text}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  )
}

export default MarkedMCQAnswerGroup
