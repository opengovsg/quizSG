import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from 'config/config.module'
import { TerminusModule } from '@nestjs/terminus'
import { HealthModule } from './health/health.module'
import { ConfigService } from 'config/config.service'
import { RouterModule } from '@nestjs/core'
import { CreatorModule } from 'creator/creator.module'
import { UserModule } from 'user/user.module'
import { UserQuizCategoryModule } from 'userQuizCategory/userQuizCategory.module'
import { SubmissionModule } from 'submission/submission.module'
import { QuizQuestionModule } from 'quizQuestion/quizQuestion.module'
import { QuestionModule } from 'question/question.module'
import { OptionModule } from 'option/option.module'
// TODO: to uncomment and implement should we decide to add these in
// import { AuthModule } from 'auth/auth.module'
// import { OtpModule } from 'otp/otp.module'
// import { MailerModule } from 'mailer/mailer.module'

// TODO: to remove modules here that are used by other modules
const apiModules = [
  TerminusModule,
  HealthModule,
  CreatorModule,
  UserModule,
  UserQuizCategoryModule,
  SubmissionModule,
  QuizQuestionModule,
  QuestionModule,
  OptionModule,
]

@Module({
  imports: [
    ConfigModule,
    ...apiModules,
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get('db.host'),
        port: config.get('db.port'),
        username: config.get('db.username'),
        password: config.get('db.password'),
        database: config.get('db.database'),
        autoLoadModels: true, // TO-DO: remove in production
        synchronize: true, // TO-DO: remove in production
      }),
    }),
    RouterModule.register([
      {
        path: '',
        children: apiModules,
      },
    ]),
  ],
})
export class ApiModule {}
