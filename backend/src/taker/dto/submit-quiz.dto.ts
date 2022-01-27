import { IsNumber, IsNotEmpty, MinLength } from 'class-validator'

export class QuestionAnswerRequestDto {
  @IsNumber()
  id!: number

  @IsNotEmpty()
  answer!: number[]
}

export class SubmissionRequestDto {
  @MinLength(1)
  name!: string

  @IsNotEmpty()
  questions!: QuestionAnswerRequestDto[]
}

export type SubmissionResponseDto = {
  id: number
  result: SubmissionResultResponseDto
  answers: SubmissionAnswerResponseDto[]
}

export type SubmissionResultResponseDto = {
  score: number
  total: number
  pass: boolean
  passingPercent: number
}

export type SubmissionAnswerResponseDto = {
  id: number
  submittedAnswer: number[]
  correctAnswer: number[]
  isCorrect: boolean
  explanation: string
}
