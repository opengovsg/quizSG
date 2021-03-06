import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Option } from '../database/models'
import { CreateOptionDB } from './dto/create-option.dto'
import { get } from 'lodash'

@Injectable()
export class OptionService {
  constructor(
    @InjectModel(Option)
    private readonly optionModel: typeof Option
  ) {}

  async bulkCreate(optionsData: CreateOptionDB[]): Promise<Option[]> {
    // TODO: find a way to not use lodash wrapper
    const rawData = await this.optionModel.bulkCreate(optionsData, {
      validate: true,
    })
    return rawData.map((data) => get(data, 'dataValues'))
  }
}
