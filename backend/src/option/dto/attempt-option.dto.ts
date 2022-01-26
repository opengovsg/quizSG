import { MinLength } from 'class-validator'

export class AttemptOptionResponseDto {
  id!: number

  @MinLength(1)
  text!: string
}

export type AttemptOptionsResponseDto = {
  options: AttemptOptionResponseDto[]
}
