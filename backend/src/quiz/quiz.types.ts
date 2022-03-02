import { Quiz, Submission } from 'database/models'

export type QuizWithSubmissions = Omit<Quiz, 'submissions'> & {
  submissions: Pick<Submission, 'name' | 'scorePercent' | 'submittedAt'>[]
}

export type QuizEditableFields = Pick<
  Quiz,
  'name' | 'passingPercent' | 'description' | 'organisation'
>
