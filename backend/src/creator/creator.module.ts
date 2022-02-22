import { Module } from '@nestjs/common'
import { QuizModule } from 'quiz/quiz.module'
import { CreatorController } from './creator.controller'
import { UserModule } from 'user/user.module'
import { QuestionModule } from 'question/question.module'
import { OptionModule } from 'option/option.module'

@Module({
  imports: [UserModule, QuizModule, QuestionModule, OptionModule],
  controllers: [CreatorController],
})
export class CreatorModule {}
