import React from 'react'
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

import { CREATOR_ROUTE } from '~constants/routes'
import Header from '~components/Header'

import Feature from './components/Feature'
import QuizFeatureInfo from './components/QuizFeatureInfo'
import billing from './images/img-billing.png'
import noresponse from './images/img-noresponse.png'
import responses from './images/img-responses.png'

const HEADER = 'QuizSG'
const SUBHEAD = 'Hack For Public Good 2022'

const LandingPage = (): JSX.Element => {
  const history = useHistory()

  const goToCreatorDashboard = (e: React.MouseEvent) => {
    // Prevent default which reloads the page
    // Instead call the primary event
    e.preventDefault()
    history.push(`${CREATOR_ROUTE}`)
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
    <Box bg="primary.100" minH="100vh">
      <Header subhead={SUBHEAD}>{HEADER}</Header>
      <Feature onButtonClick={goToCreatorDashboard} />
      <QuizFeatureInfo
        imagePosition="right"
        featureHeading="Multiple Question Types"
        featureInfo="Wide array of question types allowing quiz administrators to easily create a quiz."
        imageSource={noresponse}
      />
      <QuizFeatureInfo
        imagePosition="left"
        featureHeading="Grading and Review"
        featureInfo="Quiz participants receive instant feedback after quiz submission.
        Quiz administrators glean insights from participants’ responses."
        imageSource={responses}
      />
      <QuizFeatureInfo
        imagePosition="right"
        featureHeading="Certificate of Completion"
        featureInfo="Quiz participants will receive a certificate upon successful quiz completion."
        imageSource={billing}
      />
      <Flex justifyContent="center">
        <Button textStyle="h4" px={20} my={20} onClick={goToCreatorDashboard}>
          Go to Creator Dashboard
        </Button>
      </Flex>
    </Box>
  )
}

// Required to be default due to using dynamic import for lazy loading.
export default LandingPage
