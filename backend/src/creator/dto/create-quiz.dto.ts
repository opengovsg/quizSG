import { Type } from 'class-transformer'
import {
  MinLength,
  IsNumber,
  Min,
  Max,
  ArrayNotEmpty,
  ValidateNested,
} from 'class-validator'
import { Quiz } from 'database/models'
import {
  CreateQuestionRequestDto,
  CreateQuestionResponseDto,
} from 'question/dto/create-question.dto'

export class CreateQuizRequestDto {
  @MinLength(1)
  name!: string

  @IsNumber()
  @Min(0)
  @Max(1)
  passingPercent!: number

  @MinLength(1)
  description!: string

  @MinLength(1)
  organisation!: string

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionRequestDto)
  questions!: CreateQuestionRequestDto[]
}

export type CreateQuizResponseDto = Omit<Quiz, 'questions'> & {
  questions: CreateQuestionResponseDto[]
}
