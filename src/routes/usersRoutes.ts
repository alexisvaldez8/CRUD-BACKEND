import { Router } from 'express';
import userController from '../controllers/usersController'
class UsersRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', userController.index);
        this.router.get('/users', userController.getUsers);
        this.router.get('/:usuario/:password', userController.login);
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;