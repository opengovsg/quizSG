import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { CreatorController } from './creator.controller'

@Module({
  imports: [SequelizeModule],
  controllers: [CreatorController],
})
export class CreatorModule {}
