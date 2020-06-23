import express from 'express';
import UserController from './controllers/User';
// import multer from 'multer';
// import multerConfig from './utils/multer';

const userController = new UserController();

const routes = express.Router();

routes.get('/users/', userController.index);
routes.get('/user/:id', userController.show);

export default routes;
