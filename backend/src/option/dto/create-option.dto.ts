import { MinLength, IsBoolean } from 'class-validator'
import { Option } from 'database/models'

export class CreateOptionRequestDto {
  @MinLength(1)
  text!: string

  @IsBoolean()
  isTrue!: boolean
}

export type CreateOptionDB = CreateOptionRequestDto & {
  questionId: number
}

export type CreateOptionResponseDto = {
  options: Option[]
}
