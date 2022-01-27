/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

const DEFAULT_VALUE = 'MCQ-1'

const NewQuestion = ({ onSubmit }: { onSubmit: Function }): JSX.Element => {
  const [value, setValue] = useState(DEFAULT_VALUE)

  return (
    <Box bg="white" boxShadow="sm" borderRadius="lg" px={8} py={10}>
      <Text textStyle="h2">New Question</Text>
      <Text textStyle="subhead-1" mt={4} pl={1}>
        Question Type
      </Text>
      <form
        onSubmit={(event) => {
          onSubmit(value)
          event.preventDefault()
        }}
      >
        <Flex alignItems="center" mt={2}>
          <Select
            mr={2}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          >
            <option value="MCQ-1">Multiple Choice</option>
            <option value="MCQ-M">Select All</option>
          </Select>
          <Button type="submit">Add Question</Button>
        </Flex>
      </form>
    </Box>
  )
}

export default NewQuestion
