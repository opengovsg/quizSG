import React from 'react'
import { Box, Text } from '@chakra-ui/react'

import MarkedMCQAnswerGroup from './MarkedMCQAnswerGroup'
import QuestionInfo from './QuestionInfo'

const MarkedQuestion = (props: any): JSX.Element => {
  return (
    <Box py={8} color="primary.900">
      <QuestionInfo />
      <MarkedMCQAnswerGroup answer={props.answer} question={props.question} />
      <Box bg="white" mt={8} p={10} borderRadius="lg" boxShadow="sm">
        <Text textStyle="body-1">{props.question.details}</Text>
      </Box>
    </Box>
  )
}

export default MarkedQuestion
