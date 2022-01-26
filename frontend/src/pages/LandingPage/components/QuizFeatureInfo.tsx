import React from 'react'
import { Box, Container, Grid, GridItem, Image, Text } from '@chakra-ui/react'

const QuizFeatureInfo = (props: any): JSX.Element => {
  return (
    <Container maxW="container.xl" py={16}>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} alignItems="center">
        <GridItem colSpan={2}>
          <Box p={10} bg="white" borderRadius="lg" boxShadow="sm">
            <Text textStyle="display-2" color="primary.900">
              {props.featureHeading}
            </Text>
            <Text textStyle="h1" color="primary.700" pt={6}>
              {props.featureInfo}
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowStart={props.imagePosition === 'left' ? 1 : 0}>
          <Box>
            <Image src={props.imageSource} alt="quiz-image" borderRadius="lg" />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default QuizFeatureInfo
