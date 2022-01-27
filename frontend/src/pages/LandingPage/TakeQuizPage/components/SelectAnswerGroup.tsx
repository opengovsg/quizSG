import { Box, CheckboxGroup } from '@chakra-ui/react'
import { Checkbox } from '@opengovsg/design-system-react'

import { Option } from '~services/QuizApi/taker'

type Props = {
  options: Option[]
  optionSelected: string[]
  onOptionSelected: (optionId: string | string[]) => void
}

const SelectAnswerGroup = ({
  options,
  optionSelected,
  onOptionSelected,
}: Props): JSX.Element => {
  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p="6">
      <CheckboxGroup
        onChange={(e) => onOptionSelected(e as string[])}
        value={[...optionSelected]}
      >
        {options.map((option) => (
          <Checkbox value={option.id.toString()} key={`option-${option.id}`}>
            {option.text}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Box>
  )
}

export default SelectAnswerGroup
