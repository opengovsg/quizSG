import { useHistory, useParams } from 'react-router-dom'
import {
  Button,
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
import _ from 'lodash'
import moment from 'moment-timezone'

import { useFetchQuizWithSubmissions } from '~hooks/Creator'
import Header from '~components/Header'

import { convertDecimalToPercent } from './utils'

const OVERVIEW_TABLE_CONFIG = [
  {
    display: 'Quiz Name',
    key: 'name',
    fn: (name: string) => name || '-',
  },
  {
    display: 'Number of Attempts',
    key: 'numAttempts',
    fn: (numAttempts: string) =>
      numAttempts || parseInt(numAttempts) === 0 ? numAttempts : '-',
  },
  {
    display: 'Average Score',
    key: 'avgScore',
    fn: (avgScore: string) =>
      avgScore === null ? '-' : convertDecimalToPercent(avgScore),
  },
  {
    display: 'Date Created',
    key: 'createdAt',
    fn: (timestamp: moment.MomentInput) =>
      timestamp ? moment(timestamp).format('Do MMM YY, HH:mm:ss') : '',
  },
]

const REPONSES_TABLE_CONFIG = [
  {
    display: 'Name',
    key: 'name',
    fn: (name: string) => name || '-',
  },
  {
    display: 'Time taken',
    key: 'timeTaken',
    fn: (name: string) => name || '-',
  },
  {
    display: 'Final score',
    key: 'scorePercent',
    fn: (scorePercent: string) => convertDecimalToPercent(scorePercent) || '-',
  },
  {
    display: 'Date Attempted',
    key: 'submittedAt',
    fn: (timestamp: moment.MomentInput) =>
      timestamp ? moment(timestamp).format('Do MMM YY, HH:mm:ss') : '',
  },
]

enum HeaderText {
  Overview = 'Overview',
  Responses = 'Responses',
}

enum ButtonText {
  back = 'Back to Dashboard',
  getLink = 'Get Quiz Link',
  editQuiz = 'Edit Quiz',
  deleteQuiz = 'Delete Quiz',
}

const CreatorQuizSummaryPage = (): JSX.Element => {
  const { quizId } = useParams<{ quizId: string }>()
  const { quizWithSubmissions, fetchQuizWithSubmissionsStatus } =
    useFetchQuizWithSubmissions(quizId)
  const history = useHistory()

  const onClickBackToDashboard = () => history.replace('/creator')

  // TODO: to implement logic
  const onClickGetQuizLink = () => alert(`${window.location.origin}/${quizId}`)
  // TODO: to implement logic
  const onClickEditQuizLink = () => console.log('edit quiz link button pressed')
  // TODO: to implement logic
  const onClickDeleteQuizLink = () =>
    console.log('delete quiz link button pressed')

  return (
    <VStack bg="primary.100" minH="100vh">
      <Header w="100%">
        {`${quizWithSubmissions ? quizWithSubmissions.name : ''} Summary`}
      </Header>
      {/* TODO: fix styling for responsiveness */}
      <Container maxW="container.xl" color="primary.900">
        <Flex flexDirection="row" marginTop={6} justifyContent="space-between">
          <Button
            colorScheme="primary"
            size="md"
            onClick={onClickBackToDashboard}
          >
            {ButtonText.back}
          </Button>
          {fetchQuizWithSubmissionsStatus === 'success' && (
            <>
              <Button
                colorScheme="primary"
                size="md"
                marginLeft="auto"
                marginRight={6}
                onClick={onClickGetQuizLink}
              >
                {ButtonText.getLink}
              </Button>
              <Button
                colorScheme="primary"
                variant="outline"
                size="md"
                marginRight={6}
                onClick={onClickEditQuizLink}
              >
                {ButtonText.editQuiz}
              </Button>
              <Button
                colorScheme="danger"
                size="md"
                onClick={onClickDeleteQuizLink}
              >
                {ButtonText.deleteQuiz}
              </Button>
            </>
          )}
        </Flex>
      </Container>
      <Container maxW="container.xl" color="primary.900">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          my={6}
        >
          <Text textStyle="h2">{HeaderText.Overview}</Text>
        </Flex>
        <Table variant="striped" colorScheme="secondary" boxShadow="md">
          <Thead bg="secondary.500">
            <Tr>
              <>
                {_.map(OVERVIEW_TABLE_CONFIG, (config) => (
                  <Th key={config.key} color="white">
                    {config.display}
                  </Th>
                ))}
              </>
            </Tr>
          </Thead>
          {/* Show quiz metadata in table when call succeeds */}
          {fetchQuizWithSubmissionsStatus === 'success' &&
          quizWithSubmissions ? (
            <Tbody>
              <Tr key={quizWithSubmissions.id}>
                {_.map(OVERVIEW_TABLE_CONFIG, (config) => {
                  const { key, fn } = config
                  return (
                    <Td key={key}>{fn(_.get(quizWithSubmissions, key))}</Td>
                  )
                })}
              </Tr>
            </Tbody>
          ) : null}
        </Table>
      </Container>
      <Container maxW="container.xl" color="primary.900">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          my={6}
        >
          <Text textStyle="h2">{HeaderText.Responses}</Text>
        </Flex>
        <Table variant="striped" colorScheme="secondary" boxShadow="md">
          <Thead bg="secondary.500">
            <Tr>
              <>
                {_.map(REPONSES_TABLE_CONFIG, (config) => (
                  <Th key={config.key} color="white">
                    {config.display}
                  </Th>
                ))}
              </>
            </Tr>
          </Thead>
          {/* Show quiz responses in table when call succeeds */}
          {fetchQuizWithSubmissionsStatus === 'success' &&
          quizWithSubmissions ? (
            <Tbody>
              {_.map(quizWithSubmissions.submissions, (submission, idx) => {
                return (
                  <Tr key={idx}>
                    {_.map(REPONSES_TABLE_CONFIG, (config) => {
                      const { key, fn } = config
                      return <Td key={key}>{fn(_.get(submission, key))}</Td>
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

export default CreatorQuizSummaryPage
