import { readFileSync } from 'fs'
import { Module } from '@nestjs/common'
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize'
import { ConfigModule } from 'config/config.module'
import { TerminusModule } from '@nestjs/terminus'
import { HealthModule } from './health/health.module'
import { ConfigService } from 'config/config.service'
import { RouterModule } from '@nestjs/core'
import { CreatorModule } from 'creator/creator.module'
import { SubmissionModule } from 'submission/submission.module'
import { TakerModule } from 'taker/taker.module'
// TODO: to uncomment and implement should we decide to add these in
// import { AuthModule } from 'auth/auth.module'
// import { OtpModule } from 'otp/otp.module'
// import { MailerModule } from 'mailer/mailer.module'

// TODO: to remove modules here that are used by other modules
const apiModules = [
  TerminusModule,
  HealthModule,
  CreatorModule,
  TakerModule,
  SubmissionModule,
]

@Module({
  imports: [
    ConfigModule,
    ...apiModules,
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const sequelizeOptions: SequelizeModuleOptions = {
          dialect: 'postgres',
          autoLoadModels: true,
          synchronize: true,
        }

        if (!config.get('db.url')) {
          Object.assign(sequelizeOptions, {
            host: config.get('db.host'),
            port: config.get('db.port'),
            username: config.get('db.username'),
            password: config.get('db.password'),
            database: config.get('db.database'),
          })
        } else {
          const url = new URL(config.get('db.url'))

          Object.assign(sequelizeOptions, {
            host: url.hostname,
            port: parseInt(url.port, 10) || undefined,
            username: url.username,
            password: url.password,
            database: url.pathname.split('/')[1],
          })
        }

        if (config.get('environment') === 'production') {
          // eslint-disable-next-line no-console
          console.log(
            `Working in ${config.get('environment')} - activating ssl`
          )
          Object.assign(sequelizeOptions, {
            synchronize: false,
            ssl: true,
            dialectOptions: {
              ssl: {
                require: true,
                rejectUnauthorized: true,
                ca: readFileSync(
                  'certificates/ca-certificate-production.cer'
                ).toString(),
              },
            },
          })
        }

        return sequelizeOptions
      },
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
