import { MouseEventHandler } from 'react'
import { Box, Container, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

import buildscratch from '../images/img-buildscratch.png'

const Feature = ({
  onButtonClick,
}: {
  onButtonClick?: MouseEventHandler
}): JSX.Element => {
  return (
    <Container maxW="container.xl" my={24} py={16} bg="success.200" pt={28}>
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
            onClick={onButtonClick}
          >
            Go to Creator Dashboard
          </Button>
        </Box>
        <Box position="absolute">
          <Image
            src={buildscratch}
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
