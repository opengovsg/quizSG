import { Box, Text } from '@chakra-ui/react'

type Props = {
  finalPercent: number
  passingPercent: number
  pass: boolean
}

const FinalScore = ({
  finalPercent,
  passingPercent,
  pass,
}: Props): JSX.Element => {
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
        <Text textStyle="display-2">
          Final Score: {finalPercent}% ({pass ? 'PASS' : 'FAIL'})
        </Text>
        <Text textStyle="subhead-1" mt={2}>
          Passing Score: {passingPercent}%
        </Text>
      </Box>
    </Box>
  )
}

export default FinalScore
