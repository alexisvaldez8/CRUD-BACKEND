import { Request, Response } from 'express';
import pool from '../database';
class UserController {
    public index(req: Request, res: Response) {
        pool.query('DESCRIBE dbo.users'),
        res.json('users')
    }
    public async getUsers(req: Request, res: Response) {
        await pool.query('SELECT * FROM `dbo.users`', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }    
}

const userController = new UserController();
export default userController;