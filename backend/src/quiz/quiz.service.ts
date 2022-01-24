import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Quiz } from '../database/models'
import _ from 'lodash'

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
}
