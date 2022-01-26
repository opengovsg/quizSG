import { MinLength, IsNumber, Min, Max, IsNotEmpty } from 'class-validator'
import { AttemptQuestionResponseDto } from 'question/dto/attempt-question.dto'

export class AttemptResponseDto {
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

  @IsNotEmpty()
  questions!: AttemptQuestionResponseDto[]
}
