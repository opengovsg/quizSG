/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Option, Question, Quiz, Submission } from '../database/models'
import _ from 'lodash'
import { CreateQuizResponseDto } from 'creator/dto/create-quiz.dto'
import { AttemptResponseDto } from 'taker/dto/attempt-quiz.dto'
import { CreateQuestionResponseDto } from 'question/dto/create-question.dto'
import { QuizWithSubmissions } from './quiz.types'
import { ulid } from 'ulid'

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz)
    private readonly quizModel: typeof Quiz
  ) {}

  // TODO: incomplete. missing quiz questions
  async createQuiz(
    userId: number,
    name: string,
    passingPercent: number,
    description: string,
    organisation: string
  ): Promise<Quiz> {
    // TODO: find a way to not use lodash wrapper
    return _.get(
      await this.quizModel.create({
        name,
        ownerId: userId,
        passingPercent,
        description,
        organisation,
        randomId: ulid(),
      }),
      'dataValues'
    )
  }

  async getAllFromCreator(userId: number): Promise<Quiz[]> {
    return this.quizModel.findAll({ where: { ownerId: userId } })
  }

  async deleteOnQuizId(quizId: string, userId: number): Promise<number> {
    return this.quizModel.destroy({
      where: { randomId: quizId, ownerId: userId },
    })
  }

  formQuizResponse(
    quiz: Quiz,
    questions: Question[],
    options: Option[]
  ): CreateQuizResponseDto {
    return {
      ...quiz,
      questions: questions.map((question) => {
        const correspondingOptions = options.filter(
          (option) => option.questionId === question.id
        )
        return {
          ...question,
          options: correspondingOptions,
        } as CreateQuestionResponseDto
      }),
    } as CreateQuizResponseDto
  }

  async getQuiz(quizId: string): Promise<QuizWithSubmissions | null> {
    return this.quizModel.findOne({
      include: [
        {
          model: Submission,
          attributes: ['name', 'scorePercent', 'submittedAt'],
        },
      ],
      where: { randomId: quizId },
    })
  }

  async getQuizWithQuestionsAndOptions(quizId: string): Promise<Quiz | null> {
    return this.quizModel.findOne({
      include: [
        {
          model: Question,
          include: [
            {
              model: Option,
            },
          ],
        },
      ],
      where: { randomId: quizId },
    })
  }

  formQuizAttemptResponse(quiz: Quiz): AttemptResponseDto {
    const cloneQuiz: any = quiz.get({ plain: true })

    cloneQuiz.questions.forEach((question: any) => {
      delete question.explanation
      delete question.createdAt
      delete question.updatedAt
      delete question.quizId
      question.options.forEach((option: any) => {
        delete option.isTrue
        delete option.createdAt
        delete option.updatedAt
        delete option.questionId
      })
    })

    return cloneQuiz as AttemptResponseDto
  }
}
