import { IsString } from 'class-validator'

export class IsQuizIdPresentValidator {
  @IsString()
  id!: string
}
