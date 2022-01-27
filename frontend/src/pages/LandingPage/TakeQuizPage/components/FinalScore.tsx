import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const FinalScore = (): JSX.Element => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      p={6}
      alignItems="center"
      textAlign="center"
    >
      <Box my={6}>
        <Text textStyle="display-2">Final Score: 80% (PASS)</Text>
        <Text textStyle="subhead-1" mt={2}>
          Passing Score: 50%
        </Text>
      </Box>
    </Box>
  )
}

export default FinalScore
