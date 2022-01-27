import React from 'react'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

import FinalScore from './FinalScore'

const ResultsPage = (): JSX.Element => {
  return (
    <Container maxW="container.xl" py={20}>
      <FinalScore />
    </Container>
  )
}

export default ResultsPage
