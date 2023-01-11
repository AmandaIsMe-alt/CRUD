import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser } from '../interfaces/users'

const userTotal: SchemaOf<IUser> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().notRequired().email(),
    isAdm: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    isActive: yup.boolean().notRequired()
})

const listUsersSerializer = yup.array(userTotal)

export default listUsersSerializer;