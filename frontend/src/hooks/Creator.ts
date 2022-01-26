import { useMutation, useQuery } from 'react-query'

import QuizApi, { QuizCreationDto } from '~services/QuizApi'

const ALL_QUIZZES_QUERY_KEY = ['all_quizzes']

export function useFetchAllQuizzes() {
  const {
    data: response,
    refetch,
    status,
    isFetching,
    error,
  } = useQuery(ALL_QUIZZES_QUERY_KEY, QuizApi.fetchAllQuizzes)

  return {
    allQuizzes: response,
    fetchAllQuizzes: refetch,
    fetchAllQuizzesStatus: status,
    isFetchingAllQuizzes: isFetching,
    fetchAllQuizzesError: error,
  }
}

export function useCreateQuiz() {
  const { mutateAsync, error, isLoading } = useMutation(
    (quiz: QuizCreationDto) => QuizApi.createQuiz(quiz),
  )

  return {
    createQuiz: mutateAsync,
    createQuizError: error,
    isCreateQuizLoading: isLoading,
  }
}

export function useDeleteQuiz() {
  const { mutateAsync, error, isLoading } = useMutation((id: string) =>
    QuizApi.deleteQuiz({ id }),
  )

  return {
    createQuiz: mutateAsync,
    createQuizError: error,
    isCreateQuizLoading: isLoading,
  }
}
