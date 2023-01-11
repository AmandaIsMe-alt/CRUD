import { Router } from "express";

import verifyData from "../middlewares/verifyData.middleware";
import verifyToken from "../middlewares/verifyToken.middleware";
import verifyIsAdmin from "../middlewares/verifyIsAdmin.middleware";

import createUserController from "../controllers/createUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUserController from "../controllers/listUsers.controller";

import userSerializer from "../serializer/user.serializer";
import userUpdateSerializer from "../serializer/updateUser.serializer";

const Routers = Router()

// CREATE USER
Routers.post('',
    verifyData(userSerializer),
    createUserController
)

// UPDATE USER
Routers.patch('/:id',
    verifyData(userUpdateSerializer), 
    verifyToken, 
    updateUserController 
)

// DELETE USER
Routers.delete('/:id', 
    verifyToken, 
    verifyIsAdmin, 
    deleteUserController
)

// LIST USERS
Routers.get('', 
    verifyToken,
    verifyIsAdmin, 
    listUserController
)

export default Routers;