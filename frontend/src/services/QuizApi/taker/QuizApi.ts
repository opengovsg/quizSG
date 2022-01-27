import ApiService from '../baseConfig'

import { GetQuizDto } from '.'

function getQuiz({ id }: { id: string }): Promise<GetQuizDto> {
  console.log('[GET] getQuiz')
  return ApiService.get(`quiz/${id}/attempt`).then((res) => res.data)
}

function submitQuiz({ id }: { id: string }): Promise<any> {
  console.log('[POST] postSubmission')
  return ApiService.post(`quiz/${id}/submission`).then((res) => res.data)
}

const QuizApi = {
  getQuiz,
  submitQuiz,
}

export default QuizApi
