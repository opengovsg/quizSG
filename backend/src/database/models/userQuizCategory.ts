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
import { Quiz, User } from '.'

@Table({ tableName: 'user-quiz-categories' })
export class UserQuizCategory extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name!: string

  @BelongsTo(() => User)
  user!: User

  @HasMany(() => Quiz)
  quizzes!: Quiz[]

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
