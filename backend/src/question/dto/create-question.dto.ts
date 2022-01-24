import {
  MinLength,
  IsIn,
  IsInt,
  Min,
  IsNotEmpty,
  ValidateIf,
} from 'class-validator'
import { Option, Question, QuestionType, QUESTION_TYPES } from 'database/models'
import { CreateOptionRequestDto } from 'option/dto/create-option.dto'

export class CreateQuestionRequestDto {
  @MinLength(1)
  text!: string

  @MinLength(1)
  details!: string

  @MinLength(1)
  explanation!: string

  @ValidateIf((o) => o.mediaURL !== undefined)
  @MinLength(1)
  mediaURL?: string

  @IsIn(QUESTION_TYPES)
  type!: QuestionType

  @IsInt()
  @Min(0)
  pointValue!: number

  @IsNotEmpty()
  options!: CreateOptionRequestDto[]
}

export type CreateQuestion = Omit<CreateQuestionRequestDto, 'options'> & {
  quizId: number
}

export type CreateQuestionResponseDto = Omit<Question, 'options'> & {
  options: Option[]
}
