import { Box, Container, Text } from '@chakra-ui/react'

type Props = {
  name: string
  quizName: string
  organisation: string
}

const QuizCertificatePage = ({
  name,
  quizName,
  organisation,
}: Props): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Box
        textAlign="center"
        borderRadius="lg"
        bg="white"
        boxShadow="md"
        minH="400px"
        my={20}
        py="200px"
        color="primary.900"
      >
        <Text textStyle="display-1" color="primary.900">
          Congratulations, {name}!
        </Text>
        <Text textStyle="h1" color="primary.500" mt={24} mx={24}>
          You have successfully completed <b>{quizName}</b> set by{' '}
          <b>{organisation}</b> on {new Date().toDateString()}. Go forth and
          spread the knowledge!!
        </Text>
      </Box>
    </Container>
  )
}

export default QuizCertificatePage
