import express from 'express';
import { UserController } from '../Controller/UserController';
import { UserBusiness } from '../Business/UserBusiness';

const userRouter = express.Router();

const userBusiness = new UserBusiness();
const userController = new UserController(userBusiness);

userRouter.get('/profile/:id', userController.getUserById);
userRouter.get('/all/:role', userController.getAllUsers);
userRouter.get('/profile', userController.getMyUser);

export { userRouter };