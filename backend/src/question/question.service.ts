import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateQuestionDB } from 'question/dto/create-question.dto'
import { Question } from '../database/models'
import { get } from 'lodash'

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question)
    private readonly questionModel: typeof Question
  ) {}

  async bulkCreate(questionsData: CreateQuestionDB[]): Promise<Question[]> {
    // TODO: find a way to not use lodash wrapper
    const rawData = await this.questionModel.bulkCreate(questionsData, {
      validate: true,
    })
    return rawData.map((data) => get(data, 'dataValues'))
  }
}
