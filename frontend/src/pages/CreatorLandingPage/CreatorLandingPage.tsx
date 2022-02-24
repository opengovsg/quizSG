import { useHistory, useRouteMatch } from 'react-router-dom'
import {
  Container,
  Flex,
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
import Header from '~components/Header'

const HEADING = 'Creator Dashboard'
const TABLE_HEADING = 'Your Quizzes'
const CREATE_QUIZ_BUTTON_TEXT = 'Create new quiz'

const TABLE_CONFIG = [
  {
    display: 'S/N',
    key: '',
    fn: (_unused: string) => '',
  },
  {
    display: 'Quiz ID',
    key: 'randomId',
    fn: (id: string) => id || '',
  },
  {
    display: 'Quiz Name',
    key: 'name',
    fn: (name: string) => name || '-',
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

  // Click handler for each row to navigate to quiz result summary page
  const onClickQuiz = (randomId: string) => history.push(`/creator/${randomId}`)

  return (
    <VStack bg="primary.100" minH="100vh">
      <Header w="100%">{HEADING}</Header>
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
        <Table variant="striped" colorScheme="secondary" boxShadow="md">
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
              {_.map(allQuizzes, (quiz, sn) => {
                const { randomId } = quiz
                return (
                  <Tr
                    key={randomId}
                    onClick={() => onClickQuiz(randomId)}
                    _hover={{
                      background: 'white',
                      color: 'primary.500',
                      cursor: 'pointer',
                    }}
                  >
                    {_.map(TABLE_CONFIG, (config, idx) => {
                      const { key, fn } = config
                      return (
                        <Td key={key}>
                          {idx === 0 ? sn + 1 : fn(_.get(quiz, key))}
                        </Td>
                      )
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
