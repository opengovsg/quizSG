import { QuizWithSubmissions } from 'quiz/quiz.types'

export type GetQuizWithSubmissionsResponseDto = QuizWithSubmissions & {
  numAttempts: number
  avgScore: number
}
