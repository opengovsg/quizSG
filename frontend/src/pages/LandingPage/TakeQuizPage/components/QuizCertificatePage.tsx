import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'

const QuizCertificatePage = (): JSX.Element => {
  const name = 'Herman'
  const quizName = 'National Heritage Quiz'
  const organisationName = 'National Heritage Board'

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
          You have successfully completed the {quizName} set by{' '}
          {organisationName} on {new Date().toDateString()}. Go forth and spread
          the knowledge!!
        </Text>
      </Box>
    </Container>
  )
}

export default QuizCertificatePage
