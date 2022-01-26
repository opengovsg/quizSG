import baseConfig from './baseConfig'
import { Quiz, QuizCreationDto } from './types'

function createQuiz({
  name,
  description,
  passingPercent,
  organisation,
  questions,
}: QuizCreationDto): Promise<QuizCreationDto> {
  console.log('[POST] createQuiz')
  return baseConfig
    .post('/creator/quiz', {
      name,
      description,
      passingPercent,
      organisation,
      questions,
    })
    .then((res) => res.data)
}

function deleteQuiz({ id }: { id: string }): Promise<void> {
  console.log('[DELETE] deleteQuiz')
  return baseConfig.delete(`/creator/quiz/${id}`).then((res) => res.data)
}

function fetchAllQuizzes(): Promise<Quiz[]> {
  console.log('[GET] fetchAllQuizzes')
  return baseConfig.get('/creator/quizzes').then((res) => res.data)
}

const QuizApi = {
  createQuiz,
  deleteQuiz,
  fetchAllQuizzes,
}

export default QuizApi
