import { Box, RadioGroup } from '@chakra-ui/react'
import { Radio } from '@opengovsg/design-system-react'

import { Option } from '~services/QuizApi/taker'

type Props = {
  options: Option[]
  optionSelected: string[]
  onOptionSelected: (optionId: string | string[]) => void
}

const MCQAnswerGroup = ({
  options,
  optionSelected,
  onOptionSelected,
}: Props): JSX.Element => {
  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p="6">
      <RadioGroup
        onChange={(e) => {
          onOptionSelected(e)
        }}
        value={optionSelected[0]}
      >
        {options.map((option) => (
          <Radio value={option.id.toString()} key={`option-${option.id}`}>
            {option.text}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  )
}

export default MCQAnswerGroup
