import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'
import { ConfigService } from 'config/config.service'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  app.setGlobalPrefix('/api')

  const config = app.get(ConfigService)
  const environment = config.get('environment')
  if (['staging', 'production'].includes(environment)) {
    app.set('trust proxy', 1)
  }
  app.enableCors()

  await app.listen(config.get('port'))
}

bootstrap()
