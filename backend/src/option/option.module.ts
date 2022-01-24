import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Option } from 'database/models'
import { OptionService } from './option.service'

@Module({
  imports: [SequelizeModule.forFeature([Option])],
  providers: [OptionService],
  exports: [OptionService],
})
export class OptionModule {}
