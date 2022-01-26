import { useHistory } from 'react-router-dom'
import {
  Box,
  Flex,
  // FormControl,
  // FormHelperText,
  // FormLabel,
  // Input,
} from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

import { ROOT_ROUTE } from '~constants/routes'

import Feature from './components/Feature'
import Header from './components/Header'
import QuizFeatureInfo from './components/QuizFeatureInfo'

const LandingPage = (): JSX.Element => {
  const history = useHistory()

  const handleSubmit = (e: any) => {
    // Prevent default which reloads the page
    // Instead call the primary event
    e.preventDefault()
    const quizId = e.target[0].value
    history.push(`${ROOT_ROUTE}${quizId}`)
  }
  return (
    // <Flex flexDir="column" bg="primary.600">
    //   Default Landing Page
    //   <form onSubmit={handleSubmit}>
    //     <FormControl>
    //       <FormLabel htmlFor="quiz-id">Quiz ID</FormLabel>
    //       <Input id="quiz-id" type="text" />
    //       <FormHelperText>
    //         Enter quiz ID of the quiz you want to take
    //       </FormHelperText>
    //     </FormControl>
    //     <Button width="full" mt={4} type="submit">
    //       Enter Quiz
    //     </Button>
    //   </form>
    // </Flex>
    <Box bg="primary.100">
      <Header />
      <Feature />
      <QuizFeatureInfo
        imagePosition="right"
        featureHeading="Multiple Question Types"
        featureInfo="Wide array of question types allowing quiz administrators to easily create a quiz."
        imageSource="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <QuizFeatureInfo
        imagePosition="left"
        featureHeading="Grading and Review"
        featureInfo="Quiz participants receive instant feedback after quiz submission.
        Quiz administrators glean insights from participants’ responses."
        imageSource="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <QuizFeatureInfo
        imagePosition="right"
        featureHeading="Certificate of Completion"
        featureInfo="Quiz participants will receive a certificate upon successful quiz completion."
        imageSource="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <Flex justifyContent="center">
        <Button textStyle="h4" px={20} my={20}>
          Go to Creator Dashboard
        </Button>
      </Flex>
    </Box>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default LandingPage
