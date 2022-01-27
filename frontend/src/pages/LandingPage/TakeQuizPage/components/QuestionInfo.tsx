import { Box, Text } from '@chakra-ui/react'

type Props = {
  index: number
  title: string
  pointValue: number
  description: string
}

const QuestionInfo = ({
  index,
  title,
  pointValue,
  description,
}: Props): JSX.Element => {
  return (
    <Box color="primary.900" my={8}>
      <Text textStyle="h2">
        Question {index}: {title}
      </Text>
      <Text textStyle="subhead-1" mt={4}>
        Points: {pointValue}
      </Text>
      <Text textStyle="body" mt={4}>
        {description}
      </Text>
    </Box>
  )
}

export default QuestionInfo
