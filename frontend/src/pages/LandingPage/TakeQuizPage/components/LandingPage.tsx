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

const LandingPage = ({
  quizDescription,
  takerName,
  setTakerName,
}: {
  quizDescription: string
  takerName: string
  setTakerName: (name: string) => void
}): JSX.Element => (
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
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  </Container>
)

export default LandingPage
