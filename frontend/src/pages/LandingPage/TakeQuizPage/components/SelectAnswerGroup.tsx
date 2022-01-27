import React, { useState } from 'react'
import { Box, CheckboxGroup } from '@chakra-ui/react'
import { Checkbox } from '@opengovsg/design-system-react'

const SelectAnswerGroup = (): JSX.Element => {
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const selectAnswers = (e: any) => {
    console.log('checkbox', e)
    setSelectedAnswers(e)
  }

  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p="6">
      <CheckboxGroup onChange={selectAnswers}>
        <Checkbox value={'1'}>Option 1</Checkbox>
        <Checkbox value={'2'}>Option 2</Checkbox>
        <Checkbox value={'3'}>Option 3</Checkbox>
        <Checkbox value={'4'}>Option 4</Checkbox>
      </CheckboxGroup>
    </Box>
  )
}

export default SelectAnswerGroup
