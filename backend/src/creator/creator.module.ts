import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { QuizModule } from 'quiz/quiz.module'
import { CreatorController } from './creator.controller'
import { Quiz } from 'database/models'
import { UserModule } from 'user/user.module'
import { QuestionModule } from 'question/question.module'
import { OptionModule } from 'option/option.module'

@Module({
  imports: [
    SequelizeModule.forFeature([Quiz]),
    UserModule,
    QuizModule,
    QuestionModule,
    OptionModule,
  ],
  controllers: [CreatorController],
})
export class CreatorModule {}
