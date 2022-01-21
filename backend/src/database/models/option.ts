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
import { Question } from '.'

@Table({ tableName: 'options' })
export class Option extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number

  @ForeignKey(() => Question)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  questionId!: number

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  text!: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isTrue!: boolean

  @BelongsTo(() => Question)
  question!: Question

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}
