import { Quiz, Question, Submission } from '../database/models'
import { SubmissionDto } from './dto/submit-quiz.dto'
import _ from 'lodash'

function asId(a: number, b: number) {
  return a - b
}

export class TakerService {
  assertValidSubmission(quiz: Quiz, submission: SubmissionDto): void {
    // 0. verify that submission has a name
    if (!submission.name?.length) {
      throw new Error(`Submission came without a name`)
    }

    // 1. verify that all submitted questions and answers exist in quiz definition
    submission.questions.forEach((submittedQuestion) => {
      const quizQuestion = quiz.questions.find(
        (question) => question.id === submittedQuestion.id
      )

      if (!quizQuestion) {
        throw new Error(
          `Submitted question ${submittedQuestion.id} not found in quiz definition.`
        )
      }

      if (!submittedQuestion.answer.length) {
        throw new Error(
          `No answer submitted for question ${submittedQuestion.id}`
        )
      }

      submittedQuestion.answer.forEach((optionId) => {
        const quizOption = quizQuestion.options.find(
          (option) => option.id === optionId
        )

        if (!quizOption) {
          throw new Error(
            `Submitted option ${optionId} in question ${submittedQuestion.id} not found in quiz definition.`
          )
        }
      })
    })

    // 2. verify that all questions from the quiz have been answered
    // TODO: when quiz subset are implemented, verify against quiz attempt definition in session instead
    const missingQuestions = quiz.questions.filter((quizQuestion) => {
      return !submission.questions.find(
        (submittedQuestion) => submittedQuestion.id === quizQuestion.id
      )
    })
    if (missingQuestions.length) {
      throw new Error(
        `Submission does not include answers to all questions. Missing ${missingQuestions.map(
          (q) => q.id
        )}`
      )
    }
  }

  mark(quiz: Quiz, submission: SubmissionDto): any {
    const markResult = {
      id: quiz.id,
      result: {
        score: 0,
        total: 0,
        pass: false,
        passingPercent: quiz.passingPercent,
      },
      answers: [] as any[],
    }

    const { total, score } = submission.questions.reduce(
      (acc, question) => {
        const quizQuestion = quiz.questions.find(
          (q) => q.id === question.id
        ) as Question

        acc.total += quizQuestion.pointValue

        const correctAnswer = quizQuestion.options
          .filter((o) => o.isTrue)
          .map((o) => o.id)
          .sort(asId)

        question.answer.sort(asId)

        const isCorrect = _.isEqual(question.answer, correctAnswer)

        markResult.answers.push({
          id: quizQuestion.id,
          submittedAnswer: question.answer,
          correctAnswer,
          isCorrect,
          explanation: quizQuestion.explanation,
        })

        if (isCorrect) {
          acc.score += quizQuestion.pointValue
        }

        return acc
      },
      { total: 0, score: 0 }
    )

    markResult.result.score = score
    markResult.result.total = total
    markResult.result.pass = score / total >= quiz.passingPercent

    return markResult
  }

  async recordSubmission(
    quiz: Quiz,
    submission: any,
    markedSubmission: any,
    req: any
  ): Promise<Submission> {
    console.log(quiz.id)

    return Submission.create({
      quizId: quiz.id,
      name: submission.name,
      scorePercent:
        markedSubmission.result.score / markedSubmission.result.total,
      submission: JSON.stringify(markedSubmission),
      sourceIP: req.ip, // probably wrong, get IP in a better way taking trusted proxies into account
    })
  }
}
