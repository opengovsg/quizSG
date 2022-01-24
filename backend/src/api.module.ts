import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from 'config/config.module'
import { TerminusModule } from '@nestjs/terminus'
import { HealthModule } from './health/health.module'
import { CreatorModule } from './creator/creator.module'
import { ConfigService } from 'config/config.service'
import { RouterModule } from '@nestjs/core'
// TODO: to uncomment and implement should we decide to add these in
// import { AuthModule } from 'auth/auth.module'
// import { OtpModule } from 'otp/otp.module'
// import { MailerModule } from 'mailer/mailer.module'

const apiModules = [TerminusModule, HealthModule, CreatorModule]

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
