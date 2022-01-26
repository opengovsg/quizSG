import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
// import {} from '@chakra-ui/icons'

const TakeQuizPage = (): JSX.Element => {
  const { quizId } = useParams<{ quizId: string }>()
  const [name, setName] = useState('')

  const Header = (): JSX.Element => {
    return (
      <VStack
        padding="50px"
        background="teal.600"
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

  return (
    <>
      <Header />
      <LandingPage name={name} setName={setName} />
    </>
  )
}

const LandingPage = ({
  name,
  setName,
}: {
  name: string
  setName: (name: string) => void
}): JSX.Element => (
  // <Grid minH="100vh">
  //   <Flex padding="100px 200px" background="gray.50" justify="space-between">
  //     <Box h="50%" w="30%" bg="gray.400" flex={1} marginRight={20} />
  //     <VStack flex={1} align="stretch">
  //       <Text>
  //         The Nationanl heritage of singpaore Lorem ipsum dolor sit amet,
  //         consectetur adipiscing elit. Proin non lacinia leo, at laoreet arcu.
  //         Orci varius natoque penatibus et magnis dis parturient montes,
  //         nascetur ridiculus mus. Sed gravida sem a augue accumsan dictum.
  //         Vivamus pellentesque odio eget nibh vehicula consectetur. Etiam at
  //         porta purus, tempus accumsan lacus. Nam nec pellentesque erat. Donec
  //         ut erat ut dui tempus aliquet a a augue. Etiam fermentum imperdiet
  //         ligula, at tincidunt diam elementum vel.
  //       </Text>
  //       <Text fontWeight="bold">Your name</Text>
  //       <HStack>
  //         <Input
  //           required
  //           value={name}
  //           placeholder="E.g. Tim"
  //           type="text"
  //           onChange={(e) => {
  //             setName(e.target.value)
  //           }}
  //         />
  //         <Button
  //           colorScheme="primary"
  //           type="submit"
  //           onSubmit={(e) => {
  //             e.preventDefault()
  //           }}
  //         >
  //           Take Quiz →
  //         </Button>
  //       </HStack>
  //     </VStack>
  //   </Flex>
  // </Grid>
  <Container maxW="container.xl">
    <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems="center" mt={20}>
      <GridItem>
        <Box h="400px" w="100%" bg="gray.400" flex={1} marginRight={20} />
      </GridItem>
      <GridItem>
        <Text>
          The Nationanl heritage of singpaore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin non lacinia leo, at laoreet arcu.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed gravida sem a augue accumsan dictum.
          Vivamus pellentesque odio eget nibh vehicula consectetur. Etiam at
          porta purus, tempus accumsan lacus. Nam nec pellentesque erat. Donec
          ut erat ut dui tempus aliquet a a augue. Etiam fermentum imperdiet
          ligula, at tincidunt diam elementum vel.
        </Text>
        <Flex mt={10}>
          <Input
            required
            value={name}
            placeholder="E.g. Tim"
            type="text"
            onChange={(e) => {
              setName(e.target.value)
            }}
            mr={2}
          />
          <Button colorScheme="primary" type="submit">
            Take Quiz →
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  </Container>
)

// Required to be default due to using dynamic import for lazy loading.
export default TakeQuizPage
