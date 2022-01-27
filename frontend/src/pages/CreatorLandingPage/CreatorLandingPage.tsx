import { useHistory, useRouteMatch } from 'react-router-dom'
import {
  Button,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
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
      <Heading as="h1">{HEADING}</Heading>
      <Container maxW="container.xl">
        <Button colorScheme="teal" size="lg" onClick={onClickCreateQuiz}>
          {CREATE_QUIZ_BUTTON_TEXT}
        </Button>
        <Heading as="h3" size="lg">
          {TABLE_HEADING}
        </Heading>
        {/* Render Table Headers */}
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <>
                {_.map(TABLE_CONFIG, (config) => (
                  <Th key={config.key}>{config.display}</Th>
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
                  <Tr key={id} onClick={() => onClickQuiz(id)}>
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
