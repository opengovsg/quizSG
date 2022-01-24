import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Quiz } from '../database/models'

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
    return this.quizModel.create({
      name,
      ownerId: userId,
      passingPercent,
      description,
      organisation,
    })
  }

  async getAllFromCreator(userId: number): Promise<Quiz[]> {
    return this.quizModel.findAll({ where: { ownerId: userId } })
  }
}
