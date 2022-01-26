import {
  MinLength,
  IsIn,
  IsInt,
  Min,
  IsNotEmpty,
  ValidateIf,
} from 'class-validator'
import { QuestionType, QUESTION_TYPES } from 'database/models'
import { AttemptOptionResponseDto } from 'option/dto/attempt-option.dto'

export class AttemptQuestionResponseDto {
  @MinLength(1)
  text!: string

  @MinLength(1)
  details!: string

  @ValidateIf((o) => o.mediaURL !== undefined)
  @MinLength(1)
  mediaURL?: string

  @IsIn(QUESTION_TYPES)
  type!: QuestionType

  @IsInt()
  @Min(0)
  pointValue!: number

  @IsNotEmpty()
  options!: AttemptOptionResponseDto[]
}
