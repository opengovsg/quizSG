import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Option, Question, Quiz } from '../database/models'
import _ from 'lodash'
import { CreateQuizResponseDto } from 'creator/dto/create-quiz.dto'
import { CreateQuestionResponseDto } from 'question/dto/create-question.dto'

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
      }),
      'dataValues'
    )
  }

  async getAllFromCreator(userId: number): Promise<Quiz[]> {
    return this.quizModel.findAll({ where: { ownerId: userId } })
  }

  async deleteOnQuizId(quizId: number, userId: number): Promise<number> {
    return this.quizModel.destroy({
      where: { id: quizId, ownerId: userId },
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
}
