/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useQuery } from 'react-query'

import QuizApi from '~services/QuizApi/taker'

export function useFetchQuiz(id: string) {
  const TAKER_QUIZ_QUERY_KEY = ['taker_quiz', { id }]
  const {
    data: response,
    refetch,
    status,
    isFetching,
    error,
  } = useQuery(TAKER_QUIZ_QUERY_KEY, () => QuizApi.getQuiz({ id }))

  return {
    quiz: response,
    fetchQuiz: refetch,
    fetchQuizStatus: status,
    isFetchingQuiz: isFetching,
    fetchQuizError: error,
  }
}
