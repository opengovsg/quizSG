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
import { Question, Quiz } from '.'

@Table({ tableName: 'quiz-questions' })
export class QuizQuestion extends Model {
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
    unique: 'quiz-question-unique',
  })
  quizId!: number

  @ForeignKey(() => Question)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: 'quiz-question-unique',
  })
  questionId!: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  position!: number

  // TODO: check duplicate attribute with Question
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pointValue!: number

  @BelongsTo(() => Quiz)
  quiz!: Quiz

  @BelongsTo(() => Question)
  question!: Question

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
