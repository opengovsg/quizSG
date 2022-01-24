import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { Quiz, UserQuizCategory } from '.'

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string

  @HasMany(() => UserQuizCategory)
  userQuizCategories!: UserQuizCategory[]

  @HasMany(() => Quiz)
  quizzes!: Quiz[]

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
