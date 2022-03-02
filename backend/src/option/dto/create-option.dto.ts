import { MinLength, IsBoolean } from 'class-validator'
import { Option } from 'database/models'
import { OptionEditableFields } from 'option/options.types'

export class CreateOptionRequestDto {
  @MinLength(1)
  text!: string

  @IsBoolean()
  isTrue!: boolean
}

export type CreateOptionDB = OptionEditableFields & {
  questionId: number
}

export type CreateOptionResponseDto = {
  options: Option[]
}
