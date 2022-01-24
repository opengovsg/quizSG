import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { QuizQuestion } from 'database/models'
import { QuizQuestionService } from './quizQuestion.service'

@Module({
  imports: [SequelizeModule.forFeature([QuizQuestion])],
  providers: [QuizQuestionService],
  exports: [QuizQuestionService],
})
export class QuizQuestionModule {}
