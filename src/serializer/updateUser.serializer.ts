import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUserUpdate } from '../interfaces/users'

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    password: yup.string().notRequired()
})

export default userUpdateSerializer;