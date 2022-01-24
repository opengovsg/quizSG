import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserQuizCategory } from 'database/models'
import { UserQuizCategoryService } from './userQuizCategory.service'

@Module({
  imports: [SequelizeModule.forFeature([UserQuizCategory])],
  providers: [UserQuizCategoryService],
  exports: [UserQuizCategoryService],
})
export class UserQuizCategoryModule {}
