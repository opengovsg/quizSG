import ApiService from '../baseConfig'

import { GetQuizDto } from '.'

function getQuiz({ id }: { id: string }): Promise<GetQuizDto> {
  // TODO: fix any
  console.log('[GET] getQuiz')
  return ApiService.get(`quiz/${id}/attempt`).then((res) => res.data)
}

const QuizApi = {
  getQuiz,
}

export default QuizApi
