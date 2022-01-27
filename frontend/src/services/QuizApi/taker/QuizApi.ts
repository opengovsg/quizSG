import ApiService from '../baseConfig'

import { GetQuizDto, SubmitQuizRequestDto, SubmitQuizResponseDto } from '.'

function getQuiz({ id }: { id: string }): Promise<GetQuizDto> {
  console.log('[GET] getQuiz')
  return ApiService.get(`quiz/${id}/attempt`).then((res) => res.data)
}

function submitQuiz({
  id,
  SubmitQuizRequestDto,
}: {
  id: string
  SubmitQuizRequestDto: SubmitQuizRequestDto
}): Promise<SubmitQuizResponseDto> {
  console.log('[POST] postSubmission')
  return ApiService.post(`quiz/${id}/submission`, SubmitQuizRequestDto).then(
    (res) => res.data,
  )
}

const QuizApi = {
  getQuiz,
  submitQuiz,
}

export default QuizApi
