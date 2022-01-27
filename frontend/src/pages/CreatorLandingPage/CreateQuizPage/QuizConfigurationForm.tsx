import React from 'react'

const QuizConfigurationForm = ({
  quizConfig,
}: {
  quizConfig: {
    quizName: string
    organisationName: string
    passingScore: string
    quizDescription: string
  }
}): JSX.Element => {
  return <div>Quiz Config</div>
}

export default QuizConfigurationForm
