import { useHistory, useRouteMatch } from 'react-router-dom'
import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'
import _ from 'lodash'
import moment from 'moment-timezone'

import { useFetchAllQuizzes } from '~hooks/Creator'

const HEADING = 'Creator Dashboard'
const TABLE_HEADING = 'Your Quizzes'
const CREATE_QUIZ_BUTTON_TEXT = 'Create new quiz'

const TABLE_CONFIG = [
  {
    display: 'Quiz ID',
    key: 'id',
    fn: (id: string) => id || '',
  },
  {
    display: 'Quiz Name',
    key: 'name',
    fn: (name: any) => name || '-',
  },
  {
    display: 'Created At',
    key: 'createdAt',
    fn: (timestamp: moment.MomentInput) =>
      timestamp ? moment(timestamp).format('Do MMM YY, HH:mm:ss') : '',
  },
]

const CreatorLandingPage = (): JSX.Element => {
  const { allQuizzes, fetchAllQuizzesStatus } = useFetchAllQuizzes()
  const history = useHistory()
  const { path } = useRouteMatch()

  // Button handler to navigate to create quiz page
  const onClickCreateQuiz = () => history.push(`${path}/create`)

  // Click handler for each row to navigate to take quiz
  const onClickQuiz = (quizId: number) => history.push(`/${quizId}`)

  return (
    <VStack>
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        bg="primary.500"
        py="16"
        w="100%"
      >
        <Text textStyle="h1">{HEADING}</Text>
      </Box>
      <Container maxW="container.xl" color="primary.900">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          my={6}
        >
          <Text textStyle="h2">{TABLE_HEADING}</Text>
          <Button colorScheme="primary" size="lg" onClick={onClickCreateQuiz}>
            {CREATE_QUIZ_BUTTON_TEXT}
          </Button>
        </Flex>
        {/* Render Table Headers */}
        <Table variant="striped" colorScheme="secondary">
          <Thead bg="secondary.500">
            <Tr>
              <>
                {_.map(TABLE_CONFIG, (config) => (
                  <Th key={config.key} color="white">
                    {config.display}
                  </Th>
                ))}
              </>
            </Tr>
          </Thead>
          {/* Show quiz in table when call succeeds */}
          {fetchAllQuizzesStatus === 'success' ? (
            <Tbody>
              {_.map(allQuizzes, (quiz) => {
                const { id } = quiz
                return (
                  <Tr
                    key={id}
                    onClick={() => onClickQuiz(id)}
                    _hover={{
                      background: 'white',
                      color: 'primary.500',
                      cursor: 'pointer',
                    }}
                  >
                    {_.map(TABLE_CONFIG, (config) => {
                      const { key, fn } = config
                      return <Td key={key}>{fn(_.get(quiz, key))}</Td>
                    })}
                  </Tr>
                )
              })}
            </Tbody>
          ) : null}
        </Table>
      </Container>
    </VStack>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default CreatorLandingPage
