import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Submission } from 'database/models'
import { SubmissionService } from './submission.service'

@Module({
  imports: [SequelizeModule.forFeature([Submission])],
  providers: [SubmissionService],
  exports: [SubmissionService],
})
export class SubmissionModule {}
