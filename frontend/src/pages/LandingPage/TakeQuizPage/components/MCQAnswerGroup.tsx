import React, { useState } from 'react'
import { Box, RadioGroup } from '@chakra-ui/react'
import { Radio } from '@opengovsg/design-system-react'

const MCQAnswerGroup = (): JSX.Element => {
  const [value, setValue] = React.useState('1')

  const qnArr = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']

  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p="6">
      <RadioGroup onChange={setValue} value={value}>
        {qnArr.map((qn, index) => (
          <Radio value={index.toString()}>{qn}</Radio>
        ))}
      </RadioGroup>
    </Box>
  )
}

export default MCQAnswerGroup
