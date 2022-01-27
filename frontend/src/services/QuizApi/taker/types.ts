export type GetQuizDto = {
  name: string
  description: string
  organisation: string
  questions: QuestionInGetQuizDto[]
}

export type QuestionInGetQuizDto = {
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
export type Quiz = Omit<GetQuizDto, 'questions'>
