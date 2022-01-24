import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { Option } from '.'

export const QUESTION_TYPES = ['MCQ-1', 'MCQ-M', 'T/F'] as const
export type QuestionType = typeof QUESTION_TYPES[number]

@Table({ tableName: 'questions' })
export class Question extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  text!: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  details!: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  explanation!: string

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  mediaURL!: string

  // TODO: test ENUM
  @Column({
    type: DataType.ENUM(...QUESTION_TYPES),
    allowNull: false,
  })
  type!: QuestionType

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pointValue!: number

  @HasMany(() => Option)
  options!: Option[]

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
