export type GetQuizDto = {
  name: string
  description: string
  organisation: string
  questions: QuestionInGetQuizDto[]
}

export type QuestionInGetQuizDto = {
  id: number
  text: string
  details: string
  explanation: string
  mediaURL?: string
  type: QuestionType
  pointValue: number
  options: Option[]
}

export type QuestionType = 'MCQ-1' | 'MCQ-M' | 'T/F'

export type Option = {
  id: number
  text: string
}

export type Answer = string[]

export type SubmitQuizRequestDto = {
  name: string
  questions: {
    id: number
    answer: number[]
  }[]
}

export type SubmitQuizResponseDto = {
  id: number
  result: SubmitQuizResultResponseDto
  answers: SubmitQuizAnswerResponseDto[]
}

export type SubmitQuizResultResponseDto = {
  score: number
  total: number
  pass: boolean
  passingPercent: number
}

export type SubmitQuizAnswerResponseDto = {
  id: number
  submittedAnswer: number[]
  correctAnswer: number[]
  isCorrect: boolean
  explanation: string
}
