import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import { useFetchQuiz, useSubmitQuiz } from '~hooks/Taker'
import {
  Answer,
  SubmitQuizRequestDto,
  SubmitQuizResponseDto,
} from '~services/QuizApi/taker'

import TakeQuizPage from './TakeQuizPage'

export enum Phases {
  BEFORE_TAKING,
  TAKING,
  SUBMITTED,
  CERTIFICATE,
}

const TakeQuizPageContainer = (): JSX.Element => {
  const { quizId } = useParams<{ quizId: string }>()
  const { quiz, fetchQuizError } = useFetchQuiz(quizId)
  const { submitQuiz, submitQuizError } = useSubmitQuiz()
  const [takerName, setTakerName] = useState<string>('')
  const [phase, setPhase] = useState<Phases>(Phases.BEFORE_TAKING)
  const [questionIdx, setQuestionIdx] = useState<number>(0)
  const [answers, setAnswers] = useState<Answer[]>(
    Array(quiz?.questions.length),
  )
  const [optionSelected, setOptionSelected] = useState<string[]>([])
  const [submission, setSubmission] = useState<SubmitQuizResponseDto | null>(
    null,
  )

  // TODO: to render toast on fetchQuizError using useEffect()
  if (
    fetchQuizError ||
    !quiz ||
    !quiz.questions ||
    quiz.questions.length === 0 ||
    !quiz.questions[0].options
  )
    return <Flex>Cannot fetch quiz</Flex>

  const onOptionSelected = (optionId: string | string[]) => {
    if (Array.isArray(optionId)) {
      setOptionSelected(optionId)
    } else {
      setOptionSelected([optionId])
    }
  }

  const onPreviousButtonClick = () => {
    if (questionIdx === 0) return
    setQuestionIdx(questionIdx - 1)
    setOptionSelected([...answers[questionIdx - 1]])
  }

  const formNewAnswerState = (): Answer[] => {
    const _answers = [...answers]
    _answers[questionIdx] = [...optionSelected]
    return _answers
  }

  const onNextButtonClick = () => {
    if (answers[questionIdx + 1]) {
      setOptionSelected([...answers[questionIdx + 1]])
    } else {
      setAnswers(formNewAnswerState())
      setOptionSelected([])
    }
    setQuestionIdx(questionIdx + 1)
  }

  const onQuizSubmit = async () => {
    const updatedAnswers = formNewAnswerState()
    const reformattedAnswer = updatedAnswers.map((answer) => {
      return answer.map((option) => parseInt(option))
    })
    const submitQuizRequestDto: SubmitQuizRequestDto = {
      name: takerName,
      questions: updatedAnswers.map((_, idx) => {
        return {
          id: quiz.questions[idx].id,
          answer: reformattedAnswer[idx],
        }
      }),
    }
    const response = await submitQuiz({ id: quizId, submitQuizRequestDto })
    setSubmission(response)
    setPhase(Phases.SUBMITTED)
  }

  return (
    <TakeQuizPage
      takerName={takerName}
      setTakerName={setTakerName}
      quiz={quiz}
      phase={phase}
      onTakeQuizSubmit={() => setPhase(Phases.TAKING)}
      questionIdx={questionIdx}
      isLastQuestion={questionIdx === quiz.questions.length - 1}
      optionSelected={optionSelected}
      onOptionSelected={onOptionSelected}
      onPreviousButtonClick={onPreviousButtonClick}
      onNextButtonClick={onNextButtonClick}
      onQuizSubmit={onQuizSubmit}
      submission={submission}
      onViewCertificateButtonClick={() => setPhase(Phases.CERTIFICATE)}
    />
  )
}

export default TakeQuizPageContainer
