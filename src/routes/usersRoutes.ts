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
        this.router.get('/accounts', userController.getAccounts);
        this.router.get('/changes', userController.getChanges);
        this.router.get('/:email/:password', userController.login);
        this.router.get('/users-detail', userController.getUsersDetail);
        this.router.post('/users-detail-register', userController.saveUser);
        this.router.post('/accounts-register', userController.saveAccount);
        this.router.post('/changes-register', userController.newChange);
        this.router.delete('/:idUser', userController.deleteUser);
        this.router.delete('/accounts/:idAccount', userController.deleteAccount);
        this.router.delete('/changes/:idChanges', userController.deleteChange);
        this.router.get('/changes/filter/:id', userController.filterByid);
        this.router.get('/changes/filter-email/:email', userController.filterByEmail);
        this.router.get('/changes/filter-computer/:computer', userController.filterByComputer);
        this.router.get('/changes/filter-date-start/:dateStart', userController.filterByDateStart);
        this.router.get('/changes/filter-date-end/:dateEnd', userController.filterByDateEnd);
        this.router.put('/changes/update/:id', userController.updateChange);
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router; 