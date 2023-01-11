import { Router } from "express";
import loginController from "../controllers/login.controller";

const loginRouters = Router()
loginRouters.post('', loginController)

export default loginRouters;