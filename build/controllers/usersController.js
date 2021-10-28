"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    index(req, res) {
        database_1.default.query('DESCRIBE dbo.users'),
            res.json('users');
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM `dbo.users`', function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getUsersDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM `dbo.users.detail`', function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getAccounts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM `dbo.cuentas`', function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getChanges(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT T1.* , T2.email FROM `dbo.changes` AS T1 LEFT JOIN `dbo.users.detail` AS T2 ON T1.idUser = T2.idUser', function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const { password } = req.params;
            yield database_1.default.query('SELECT * FROM `dbo.users.detail` WHERE email = ? AND password = ?;', [email, password], function (err, result) {
                if (err)
                    throw err;
                if (result.lenght < 0) {
                    res.json(result);
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    saveUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO `dbo.users.detail` set ?', [req.body], function (err, result) {
                if (err)
                    throw err;
                if (result.lenght < 0) {
                    res.json({ "Respuesta": "Usuario guardado" });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    saveAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO `dbo.cuentas` set ?', [req.body], function (err, result) {
                if (err)
                    throw err;
                if (result.lenght < 0) {
                    res.json({ "Respuesta": "Cuenta guardada" });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    newChange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO `dbo.changes` set ?', [req.body], function (err, result) {
                if (err)
                    throw err;
                if (result.lenght < 0) {
                    res.json({ "Respuesta": "Cambio guardado" });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { idUser } = req.params;
            yield database_1.default.query('DELETE FROM `dbo.users.detail` WHERE idUser = ?', [idUser], function (err, result) {
                if (err)
                    throw err;
                if (result) {
                    res.json({ "Respuesta": "Usuario eliminado" });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    deleteAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { idAccount } = req.params;
            yield database_1.default.query('DELETE FROM `dbo.cuentas` WHERE idAccount = ?', [idAccount], function (err, result) {
                if (err)
                    throw err;
                if (result) {
                    res.json({ "Respuesta": "Cuenta eliminada" });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    deleteChange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { idChanges } = req.params;
            yield database_1.default.query('DELETE FROM `dbo.changes` WHERE idChanges = ?', [idChanges], function (err, result) {
                if (err)
                    throw err;
                if (result) {
                    res.json({ "Respuesta": "Cambio eliminado" });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    filterByid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT T1.* , T2.email FROM `dbo.changes` AS T1 LEFT JOIN `dbo.users.detail` AS T2 ON T1.idUser = T2.idUser WHERE T1.idChanges = ?', [id], function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    filterByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            yield database_1.default.query('SELECT T1.* , T2.email FROM `dbo.changes` AS T1 LEFT JOIN `dbo.users.detail` AS T2 ON T1.idUser = T2.idUser WHERE T2.email = ?', [email], function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    filterByComputer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { computer } = req.params;
            yield database_1.default.query('SELECT T1.* , T2.email FROM `dbo.changes` AS T1 LEFT JOIN `dbo.users.detail` AS T2 ON T1.idUser = T2.idUser WHERE T1.computer = ?', [computer], function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    filterByDateStart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dateStart } = req.params;
            yield database_1.default.query('SELECT T1.* , T2.email FROM `dbo.changes` AS T1 LEFT JOIN `dbo.users.detail` AS T2 ON T1.idUser = T2.idUser WHERE T1.dateStart = ?', [dateStart], function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    filterByDateEnd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dateEnd } = req.params;
            yield database_1.default.query('SELECT T1.* , T2.email FROM `dbo.changes` AS T1 LEFT JOIN `dbo.users.detail` AS T2 ON T1.idUser = T2.idUser WHERE T1.dateEnd = ?', [dateEnd], function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    updateChange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const change = req.body;
            yield database_1.default.query('UPDATE `dbo.changes` set ? WHERE idChanges = ?', [change, id], function (err, result) {
                if (err)
                    throw err;
                // res.json(result);
                res.json({ message: "The change was Updated" });
            });
        });
    }
}
const userController = new UserController();
exports.default = userController;
