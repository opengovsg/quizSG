import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import {
  CreateQuestionRequestDto,
  CreateQuestion,
} from 'question/dto/create-question.dto'
import { Question } from '../database/models'
import _ from 'lodash'

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question)
    private readonly questionModel: typeof Question
  ) {}

  async bulkCreate(questionsData: CreateQuestion[]): Promise<Question[]> {
    // TODO: find a way to not use lodash wrapper
    const rawData = await this.questionModel.bulkCreate(questionsData)
    return rawData.map((data) => _.get(data, 'dataValues'))
  }

  transformFullDataToBulkCreateData(
    quizId: number,
    fullQuestionData: CreateQuestionRequestDto
  ): CreateQuestion {
    return {
      quizId,
      text: fullQuestionData.text,
      details: fullQuestionData.details,
      explanation: fullQuestionData.explanation,
      mediaURL: fullQuestionData.mediaURL,
      type: fullQuestionData.type,
      pointValue: fullQuestionData.pointValue,
    }
  }
}
