import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Question } from 'database/models'
import { QuestionService } from './question.service'

@Module({
  imports: [SequelizeModule.forFeature([Question])],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
