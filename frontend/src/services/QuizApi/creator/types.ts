export type QuizCreationDto = {
  name: string
  description: string
  passingPercent: number
  organisation: string
  questions: QuestionCreationDto[]
}

export type Quiz = QuizCreationDto & {
  id: number
  ownerId: number
  createdAt: string
  updatedAt: string
}

export type QuestionCreationDto = {
  text: string
  details: string
  explanation: string
  type: 'MCQ-1' | 'MCQ-M'
  pointValue: number
  options: OptionCreationDto[]
}

export type OptionCreationDto = {
  text: string
  isTrue: boolean
}

export type Submission = {
  name: string
  scorePercent: number
  submittedAt: Date
}

export type QuizWithSubmissions = Quiz & {
  submissions: Submission[]
  numAttempts: number
  avgScore: number
}
