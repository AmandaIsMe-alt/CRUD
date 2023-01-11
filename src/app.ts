import express from "express"
import 'express-async-errors'
import "reflect-metadata"

import handleError from "./errors/handleError"

import Routers from "./routers/users.routes"
import loginRouters from "./routers/login.routes"

const app = express()
app.use(express.json())
app.use('/login', loginRouters)
app.use('/users', Routers)
app.use(handleError)

export default app;