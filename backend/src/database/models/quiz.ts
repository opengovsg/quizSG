import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { QuizQuestion, Submission, User, UserQuizCategory } from '.'

@Table({ tableName: 'quizzes' })
export class Quiz extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name!: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ownerId!: number

  @ForeignKey(() => UserQuizCategory)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId!: number

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  passingPercent!: number

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  organisation!: string

  @BelongsTo(() => User)
  user!: User

  @BelongsTo(() => UserQuizCategory)
  userQuizCategory!: UserQuizCategory

  @HasMany(() => Submission)
  submissions!: Submission[]

  @HasMany(() => QuizQuestion)
  quizQuestions!: QuizQuestion[]

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
