import React from 'react'
import { Box, Container, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

const Feature = (props: any): JSX.Element => {
  return (
    <Container maxW="container.xl" my={24} py={16} bg="success.200">
      <SimpleGrid columns={2} spacing={10} alignItems="center">
        <Box px={8} zIndex={2}>
          <Text textStyle="display-2" color="primary.700">
            A quiz platform built by the Singapore Government to easily
            administer quizzes.
          </Text>
          <Button
            colorScheme="primary"
            // rightIcon={<BiRightArrowAlt fontSize="1.5rem" />}
            variant="solid"
            mt={6}
          >
            Go to Creator Dashboard
          </Button>
        </Box>
        <Box position="absolute">
          <Image
            src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="quiz-image"
            pos="relative"
            left="630"
            w="600px"
            borderRadius="lg"
          />
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Feature
