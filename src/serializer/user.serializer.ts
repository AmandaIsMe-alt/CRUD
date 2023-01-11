import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUserRequest } from '../interfaces/users'

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

export default userSerializer;