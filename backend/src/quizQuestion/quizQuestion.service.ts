import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { QuizQuestion } from '../database/models'

@Injectable()
export class QuizQuestionService {
  constructor(
    @InjectModel(QuizQuestion)
    private readonly quizQuestionModel: typeof QuizQuestion
  ) {}
}
