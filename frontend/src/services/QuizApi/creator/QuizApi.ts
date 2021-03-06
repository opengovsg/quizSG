import ApiService from '../baseConfig'

import { Quiz, QuizCreationDto } from './types'
import { QuizWithSubmissions } from '.'

function createQuiz({
  name,
  description,
  passingPercent,
  organisation,
  questions,
}: QuizCreationDto): Promise<QuizCreationDto> {
  console.log('[POST] createQuiz')
  return ApiService.post('/creator/quiz', {
    name,
    description,
    passingPercent,
    organisation,
    questions,
  }).then((res) => res.data)
}

function deleteQuiz({ id }: { id: string }): Promise<void> {
  console.log('[DELETE] deleteQuiz')
  return ApiService.delete(`/creator/quiz/${id}`).then((res) => res.data)
}

function fetchAllQuizzes(): Promise<Quiz[]> {
  console.log('[GET] fetchAllQuizzes')
  return ApiService.get('/creator/quizzes').then((res) => res.data)
}

function fetchQuizWithSubmissions({
  id,
}: {
  id: string
}): Promise<QuizWithSubmissions> {
  console.log('[GET] fetchQuizWithSubmissions')
  return ApiService.get(`/creator/quiz/${id}`).then((res) => res.data)
}

const QuizApi = {
  createQuiz,
  deleteQuiz,
  fetchAllQuizzes,
  fetchQuizWithSubmissions,
}

export default QuizApi
