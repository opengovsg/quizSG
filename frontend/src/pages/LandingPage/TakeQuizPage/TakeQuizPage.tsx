import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

const TakeQuizPage = (): JSX.Element => {
  const { quizId } = useParams<{ quizId: string }>()
  const [name, setName] = useState('')

  const Header = (): JSX.Element => {
    return (
      <VStack
        padding="50px"
        background="teal.600" // to change
        borderStyle="solid"
        justify="space-between"
        align="center"
      >
        <Text textStyle="h1" color="white">
          National Heritage Quiz
        </Text>
        <Text textStyle="h2" color="white">
          X Questions (5 minutes to complete)
        </Text>
      </VStack>
    )
  }

  const LandingPage = (): JSX.Element => {
    return (
      <Grid minH="100vh">
        <Flex
          padding="100px 200px"
          background="gray.50"
          justify="space-between"
        >
          <Box h="40%" w="30%" bg="gray.400" flex={1} marginRight={20} />
          <VStack flex={1} alignContent="left">
            <Text>
              The Nationanl heritage of singpaore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin non lacinia leo, at laoreet
              arcu. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed gravida sem a augue accumsan
              dictum. Vivamus pellentesque odio eget nibh vehicula consectetur.
              Etiam at porta purus, tempus accumsan lacus. Nam nec pellentesque
              erat. Donec ut erat ut dui tempus aliquet a a augue. Etiam
              fermentum imperdiet ligula, at tincidunt diam elementum vel.
            </Text>
            <HStack>
              <Input
                required
                value={name}
                placeholder="Your name"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
              <Button colorScheme="primary" type="submit">
                Take Quiz →
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Grid>
    )
  }

  return (
    <>
      <Header />
      <LandingPage />
    </>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default TakeQuizPage
