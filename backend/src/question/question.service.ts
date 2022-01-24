import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Question } from '../database/models'

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question)
    private readonly questionModel: typeof Question
  ) {}
}
