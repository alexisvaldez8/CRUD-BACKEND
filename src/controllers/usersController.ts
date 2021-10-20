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
    public async getUsersDetail(req: Request, res: Response) {
        await pool.query('SELECT * FROM `dbo.users.detail`', function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getAccounts(req: Request, res: Response) {
        await pool.query('SELECT * FROM `dbo.cuentas`', function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getChanges(req: Request, res: Response) {
        await pool.query('SELECT T1.* , T2.email FROM `dbo.changes` AS T1 LEFT JOIN `dbo.users.detail` AS T2 ON T1.idUser = T2.idUser', function(err, result) {
            if (err) throw err;
            res.json(result);
        });  
    }
    public async login (req: Request, res : Response): Promise<any> {
        const { email } = req.params;
        const { password } = req.params;
        await pool.query('SELECT * FROM `dbo.users.detail` WHERE email = ? AND password = ?;',[email,password], function(err, result) {
            if (err) throw err;
            if(result.lenght<0){
                res.json(result)
            }else{
                res.json(result)
            }
        });

    }
    public async saveUser (req: Request, res : Response):Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO `dbo.users.detail` set ?',[req.body], function(err, result) {
            if (err) throw err;
            if(result.lenght<0){
                res.json({"Respuesta":"Usuario guardado"});
            }else{
                res.json(result)
            }
        });
    }
    public async saveAccount (req: Request, res : Response):Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO `dbo.cuentas` set ?',[req.body], function(err, result) {
            if (err) throw err;
            if(result.lenght<0){
                res.json({"Respuesta":"Cuenta guardada"});
            }else{
                res.json(result)
            }
        });
    }
    public async newChange (req: Request, res : Response):Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO `dbo.changes` set ?',[req.body], function(err, result) {
            if (err) throw err;
            if(result.lenght<0){
                res.json({"Respuesta":"Cambio guardado"});
            }else{
                res.json(result)
            }
        });
    }
    public async deleteUser (req: Request, res : Response):Promise<void> {
        console.log(req.body);
        const { idUser } = req.params;
        await pool.query('DELETE FROM `dbo.users.detail` WHERE idUser = ?',[idUser], function(err, result) {
            if (err) throw err;
            if(result){
                res.json({"Respuesta":"Usuario eliminado"});
            }else{
                res.json(result)
            }
        });
    }  
    public async deleteAccount (req: Request, res : Response):Promise<void> {
        console.log(req.body);
        const { idAccount } = req.params;
        await pool.query('DELETE FROM `dbo.cuentas` WHERE idAccount = ?',[idAccount], function(err, result) {
            if (err) throw err;
            if(result){
                res.json({"Respuesta":"Cuenta eliminada"});
            }else{
                res.json(result)
            }
        });
    }
    public async deleteChange (req: Request, res : Response):Promise<void> {
        console.log(req.body);
        const { idChanges } = req.params;
        await pool.query('DELETE FROM `dbo.changes` WHERE idChanges = ?',[idChanges], function(err, result) {
            if (err) throw err;
            if(result){
                res.json({"Respuesta":"Cambio eliminado"});
            }else{
                res.json(result)
            }
        });
    }     
}

const userController = new UserController();
export default userController;