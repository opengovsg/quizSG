import { MinLength, IsBoolean } from 'class-validator'

export class AttemptOptionResponseDto {
  id!: number

  @MinLength(1)
  text!: string

  @IsBoolean()
  isTrue!: boolean
}

export type AttemptOptionsResponseDto = {
  options: AttemptOptionResponseDto[]
}
