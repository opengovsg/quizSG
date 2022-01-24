import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { UserQuizCategory } from '../database/models'

@Injectable()
export class UserQuizCategoryService {
  constructor(
    @InjectModel(UserQuizCategory)
    private readonly userQuizCategoryModel: typeof UserQuizCategory
  ) {}
}
