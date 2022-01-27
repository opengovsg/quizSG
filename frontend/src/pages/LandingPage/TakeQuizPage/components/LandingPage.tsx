import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from '@chakra-ui/react'

type Props = {
  quizDescription: string
  takerName: string
  setTakerName: (name: string) => void
  onTakeQuizSubmit: () => void
}

const LandingPage = ({
  quizDescription,
  takerName,
  setTakerName,
  onTakeQuizSubmit,
}: Props): JSX.Element => (
  <Container maxW="container.xl">
    <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems="center" mt={20}>
      <GridItem>
        <Box h="400px" w="100%" bg="gray.400" flex={1} marginRight={20} />
      </GridItem>
      <GridItem>
        <Text>{quizDescription}</Text>
        <Box mt={10}>
          <Text fontWeight="bold" textStyle="subhead-1">
            Your name
          </Text>
          <Flex mt={2}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                onTakeQuizSubmit()
              }}
            >
              <Input
                required
                value={takerName}
                placeholder="E.g. Tim"
                type="text"
                onChange={(e) => {
                  setTakerName(e.target.value)
                }}
                mr={2}
              />
              <Button colorScheme="primary" type="submit">
                Take Quiz →
              </Button>
            </form>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  </Container>
)

export default LandingPage
