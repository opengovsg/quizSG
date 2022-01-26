import { IsNumber, IsNotEmpty, MinLength } from 'class-validator'

export class QuestionAnswerDto {
  @IsNumber()
  id!: number

  @IsNotEmpty()
  answer!: number[]
}

export class SubmissionDto {
  @MinLength(1)
  name!: string

  @IsNotEmpty()
  questions!: QuestionAnswerDto[]
}
