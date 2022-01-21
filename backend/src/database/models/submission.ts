import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { Quiz } from '.'

export type SubmissionType = {
  questions: {
    id: number
    answer: unknown
  }[]
}

@Table({ tableName: 'submissions' })
export class Submission extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number

  @ForeignKey(() => Quiz)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quizId!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  scorePercent!: number

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  submission!: SubmissionType

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  sourceIP!: string

  @BelongsTo(() => Quiz)
  quiz!: Quiz

  @CreatedAt
  submittedAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
