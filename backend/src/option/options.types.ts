import { Option } from 'database/models'

export type OptionEditableFields = Pick<Option, 'text' | 'isTrue'>
