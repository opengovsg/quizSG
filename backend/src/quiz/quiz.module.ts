import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Quiz } from 'database/models'
import { QuizService } from './quiz.service'

@Module({
  imports: [SequelizeModule.forFeature([Quiz])],
  providers: [QuizService],
  exports: [QuizService],
})
export class QuizModule {}
