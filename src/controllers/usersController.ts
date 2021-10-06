import { Request, Response } from 'express';
import pool from '../database';
class UserController {
    public index(req: Request, res: Response) {
        pool.query('DESCRIBE dbo.users'),
        res.json('users')
    }
    public async getUsers(req: Request, res: Response) {
        await pool.query('SELECT * FROM `dbo.users`', function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async login (req: Request, res : Response): Promise<any> {
        const { usuario } = req.params;
        const { password } = req.params;
        await pool.query('SELECT * FROM `dbo.users` WHERE name = ? AND password = ?;',[usuario,password], function(err, result) {
            if (err) throw err;
            // res.json(result);
            if(result.lenght<0){
                res.json(result)
            }else{
                res.json(result)
            }
        });

    }    
}

const userController = new UserController();
export default userController;