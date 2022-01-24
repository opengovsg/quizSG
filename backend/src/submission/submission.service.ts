import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Submission } from '../database/models'

@Injectable()
export class SubmissionService {
  constructor(
    @InjectModel(Submission)
    private readonly submissionModel: typeof Submission
  ) {}
}
