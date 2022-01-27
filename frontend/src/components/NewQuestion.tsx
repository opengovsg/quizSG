import React from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

const NewQuestion = (): JSX.Element => {
  return (
    <Box bg="white" boxShadow="sm" borderRadius="lg" px={8} py={10}>
      <Text textStyle="h2">New Question</Text>
      <Text textStyle="subhead-1" mt={4} pl={1}>
        Question Type
      </Text>
      <form action="">
        <Flex alignItems="center" mt={2}>
          <Select mr={2}>
            <option>Multiple Choice</option>
            <option>Select All</option>
          </Select>
          <Button>Add Question</Button>
        </Flex>
      </form>
    </Box>
  )
}

export default NewQuestion
