import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from '../database/models'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ) {}

  /**
   * We assume that there is only 1 admin user in this alpha version, and so we get the first user in DB as the admin
   */
  async getFirst(): Promise<User | null> {
    return this.userModel.findOne()
  }
}
