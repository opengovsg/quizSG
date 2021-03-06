import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { QuizModule } from 'quiz/quiz.module'
import { TakerController } from './taker.controller'
import { Quiz } from 'database/models'
import { UserModule } from 'user/user.module'
import { QuestionModule } from 'question/question.module'
import { OptionModule } from 'option/option.module'
import { TakerService } from './taker.service'

@Module({
  imports: [
    SequelizeModule.forFeature([Quiz]),
    UserModule,
    QuizModule,
    QuestionModule,
    OptionModule,
  ],
  controllers: [TakerController],
  providers: [TakerService],
})
export class TakerModule {}
