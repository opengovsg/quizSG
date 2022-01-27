import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

// import { useFetchQuiz } from '~hooks/Taker'
import QuestionPage from './components/QuestionPage'
import ResultsPage from './components/ResultsPage'

const TakeQuizPage = (): JSX.Element => {
  const { quizId } = useParams<{ quizId: string }>()
  const [name, setName] = useState('')
  const [quiz, setQuiz] = useState<any>()

  // async function fetchQuiz() {
  //   const quiz = await useFetchQuiz()
  //   console.log('foo')
  //   console.log(quiz)
  //   setQuiz(quiz?.getQuiz)
  // }
  // useEffect(() => {
  //   fetchQuiz()
  // }, [])

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
      <Box bg="primary.100">
        <Header />
        <LandingPage name={name} setName={setName} />
        <QuestionPage />
        <ResultsPage />
      </Box>
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
        <Box mt={10}>
          <Text fontWeight="bold" textStyle="subhead-1">
            Your name
          </Text>
          <Flex mt={2}>
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
        </Box>
      </GridItem>
    </Grid>
  </Container>
)

// Required to be default due to using dynamic import for lazy loading.
export default TakeQuizPage
