import { Question } from 'database/models'

export type QuestionEditableFields = Pick<
  Question,
  'text' | 'details' | 'explanation' | 'mediaURL' | 'pointValue'
>
