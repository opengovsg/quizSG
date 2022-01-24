import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Option } from '../database/models'

@Injectable()
export class OptionService {
  constructor(
    @InjectModel(Option)
    private readonly optionModel: typeof Option
  ) {}
}
