import { Router } from 'express';

class UsersRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Users'));
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;